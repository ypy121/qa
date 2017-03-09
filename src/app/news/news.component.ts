import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [ StatusService ]
})
export class NewsComponent implements OnInit {

  constructor(
    private statusService: StatusService
  ) { }

  status = [];

  ngOnInit() {
    this.statusService.inboxQuery()
      .then((res) => {
        this.status = res;
      })
      .catch(error => {
        console.error(error);
      })
  }
}