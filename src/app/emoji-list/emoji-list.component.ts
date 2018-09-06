import {Component, OnInit} from '@angular/core';
import {EmojiListService} from './emoji-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Emoji} from './emoji';
import {navigateChangeQueryParams} from '../helpers/router';
import {ItemsFilterService} from '../items-filter/items-filter.service';

@Component({
  selector: 'app-emoji-list',
  templateUrl: './emoji-list.component.html',
  styleUrls: ['./emoji-list.component.scss']
})
export class EmojiListComponent implements OnInit {
  readonly TEMPLATE_DEFAULT = 'default';
  readonly TEMPLATE_LOADING = 'loading';
  readonly TEMPLATE_ERROR = 'error';

  public errorMessage: string | null = null;
  public template = this.TEMPLATE_DEFAULT;
  public listType: string = null;
  public emojis: Array<object> = [];
  public filter: string;
  public paginateConfig = {
    itemsPerPage: 20,
    currentPage: 0
  };

  constructor(
    private emojiListService: EmojiListService,
    private route: ActivatedRoute,
    private router: Router,
    private itemFilterService: ItemsFilterService
  ) {
  }

  ngOnInit() {
    if (!this.emojiListService.rawList) {
      this.template = this.TEMPLATE_LOADING;
      this.emojiListService.get().subscribe(
        (data) => {
          this.emojiListService.prepareList(data);
          this.emojis = this.getList(this.listType);
          this.template = this.TEMPLATE_DEFAULT;
        },
        (error) => {
          this.errorMessage = (error.error ? error.error.message : error.message) || 'Can\'t load emojis list';
          this.template = this.TEMPLATE_ERROR;
          console.error(this.errorMessage);
        }
      );
    } else {
      this.emojis = this.getList(this.listType);
    }

    this.route.data.subscribe((data: any) => {
      this.listType = data.listType;
      this.emojis = this.getList(this.listType);
    });

    this.route.queryParams.subscribe((queryParams: any) => {
      this.filter = queryParams.filter || null;
      this.paginateConfig.currentPage = queryParams.page || null;
    });

    this.itemFilterService.value.subscribe((value: any) => {
      navigateChangeQueryParams(this.router, {filter: value}).then(() => {
        this.filter = value;
      });
    });
  }

  getList(name: string): Array<Emoji> {
    return this.emojiListService.getList(name || this.emojiListService.TYPE_DEFAULT);
  }

  remove(type: string, name: string): void {
    if (this.emojiListService.remove(type, name)) {
      this.emojis = this.getList(this.listType);
    }
  }

  insert(type: string, name: string): void {
    if (this.emojiListService.insert(type, name)) {
      this.emojis = this.getList(this.listType);
    }
  }

  onPageChange(number: number) {
    navigateChangeQueryParams(this.router, {page: number}).then(() => {
      this.paginateConfig.currentPage = number;
    });
  }
}
