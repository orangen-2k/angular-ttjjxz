import { Component, OnInit } from '@angular/core';
import { table } from '../table';
import { data } from '../data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
   title = "Danh các sách bệnh viện hiện nay";
   ngOnInit() {
  }
}
