import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public title: string;

  constructor(private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit() {
    if (this.title) {
      this.titleService.setTitle(this.title);
    }

    this.route.data.subscribe((data: any) => {
      this.title = data.title;
      this.titleService.setTitle(this.title);
    });
  }

}
