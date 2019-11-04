

import {DecimalPipe} from '@angular/common';
// import {Component, Directive, EventEmitter, Input, Output, 
//   QueryList, ViewChildren, OnInit} from '@angular/core';
// import {Observable} from 'rxjs';
// import {MyPost} from './mypost';
// import {MyPostService} from './mypost.service';
// // import {NgbdSortableHeader, SortEvent} from '../table05/sortable.directive';
// import {ApiService } from '../../api.service'

// from product03-list.comp
import { Component, Directive, EventEmitter, Input, Output, 
  QueryList, ViewChildren, OnInit} from '@angular/core';
import {MyPost} from './mypost';
import {MyPostService} from './mypost.service';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})

export class NgbdSortableHeader {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

@Component({
  selector: 'p03-list',
  templateUrl: './myposts.component.html' 
})

export class MypostsComponent implements OnInit {

  // imageWidth = 50;
  // imageMargin = 2;
  // showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: MyPost[] = [];
  products: MyPost[] = [];

  constructor(private mypostService: MyPostService) {

  }

  // onRatingClicked(message: string): void {
  //   this.pageTitle = 'Product03 List: ' + message;
  // }


  performFilter(filterBy: string): MyPost[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.filteredProducts.filter((product: MyPost) =>
      product.msg.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;


  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries // sorting products
    if (direction === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = [...this.products].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  ngOnInit(): void {
    this.mypostService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }
}
