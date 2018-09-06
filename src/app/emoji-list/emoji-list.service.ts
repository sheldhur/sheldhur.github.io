import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Emoji} from './emoji';
import {isIncludes} from '../helpers/array';


@Injectable({
  providedIn: 'root'
})
export class EmojiListService {
  readonly LS_FILTER_KEY = 'emoji.filter';
  readonly URL_EMOJIS = 'https://api.github.com/emojis';
  readonly TYPE_DEFAULT = 'default';
  readonly TYPE_FAVORITE = 'favorite';
  readonly TYPE_DELETED = 'deleted';

  public rawList: any | null = null;
  private filter = {
    [this.TYPE_FAVORITE]: [],
    [this.TYPE_DELETED]: [],
  };
  public list = {
    [this.TYPE_DEFAULT]: [],
    [this.TYPE_FAVORITE]: [],
    [this.TYPE_DELETED]: [],
  };

  constructor(private http: HttpClient) {
    this.filter = this.getFilter();
  }

  private getFilter() {
    if (localStorage[this.LS_FILTER_KEY]) {
      return JSON.parse(localStorage[this.LS_FILTER_KEY]);
    }

    return this.filter;
  }

  private saveFilter(): void {
    localStorage[this.LS_FILTER_KEY] = JSON.stringify(this.filter);
  }

  public get(): Observable<any> {
    return this.http.get(this.URL_EMOJIS);
  }

  public getList(name: string): Array<Emoji> {
    return this.list[name].slice(0, 200);
  }

  public remove(type: string, name: string): boolean {
    if (this.filter[type]) {
      this.filter[type] = this.filter[type].filter(item => item !== name);
      if (type === this.TYPE_DELETED) {
        this.filter[this.TYPE_FAVORITE] = this.filter[this.TYPE_FAVORITE].filter(item => item !== name);
      }
      this.saveFilter();
      this.prepareList(this.rawList);

      return true;
    }

    return false;
  }

  public insert(type: string, name: string): boolean {
    if (this.filter[type]) {
      this.filter[type].push(name);
      this.saveFilter();
      this.prepareList(this.rawList);

      return true;
    }

    return false;
  }

  public prepareList(data: any): void {
    if (!this.rawList) {
      this.rawList = data;
    }
    const favorites = [...(this.filter[this.TYPE_FAVORITE] || [])];
    const deleted = [...(this.filter[this.TYPE_DELETED] || [])];

    this.list[this.TYPE_DEFAULT] = [];
    this.list[this.TYPE_FAVORITE] = [];
    this.list[this.TYPE_DELETED] = [];

    Object.entries(data).forEach(([name, imgSrc]) => {
      let type = this.TYPE_DEFAULT;
      if (isIncludes(deleted, name)) {
        type = this.TYPE_DELETED;
      } else if (isIncludes(favorites, name)) {
        type = this.TYPE_FAVORITE;
      }

      const emoji = {name, imgSrc, type};

      if (type === this.TYPE_FAVORITE) {
        this.list[this.TYPE_FAVORITE].push(emoji);
        this.list[this.TYPE_DEFAULT].push(emoji);
      } else if (type === this.TYPE_DELETED) {
        this.list[this.TYPE_DELETED].push(emoji);
      } else {
        this.list[this.TYPE_DEFAULT].push(emoji);
      }
    });
  }
}
