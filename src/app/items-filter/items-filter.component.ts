import {Component, ElementRef, OnInit} from '@angular/core';
import {ItemsFilterService} from './items-filter.service';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-items-filter',
  templateUrl: './items-filter.component.html',
  styleUrls: ['./items-filter.component.scss']
})
export class ItemsFilterComponent implements OnInit {
  constructor(private itemFilterService: ItemsFilterService, private elementRef: ElementRef) {
    const eventStream = fromEvent(elementRef.nativeElement, 'input')
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(300),
      );

    eventStream.subscribe(value => {
      this.itemFilterService.value.emit(value.length ? value : undefined);
    });
  }

  ngOnInit() {
  }
}
