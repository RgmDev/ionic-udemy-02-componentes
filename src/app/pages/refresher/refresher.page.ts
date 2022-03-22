import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = Array(0);
  constructor() { }

  ngOnInit() {
  }

  doRefresh( ev ) {

    setTimeout(() => {
      this.items = Array(20);
      ev.target.complete();
    }, 1500);

    console.log( ev )
  }

}
