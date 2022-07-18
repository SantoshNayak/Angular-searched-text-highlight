import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  str = 'Type anything from this string on below input field to search and highlight for a match.. This stackbliz is created by Santosh';
  constructor() {}
  searchKeyword: string = '';
  ngOnInit() {}
}
