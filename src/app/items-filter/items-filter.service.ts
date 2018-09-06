import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsFilterService {

  public value: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }
}
