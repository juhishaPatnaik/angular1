import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
// import {Data} from "./../data/data";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  // data: Array<any>= Data;
  data: Array<any>;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/data/data.json')
    .map(res => res.json())
    .subscribe(
      data=> this.data=data
    );
  }

}
