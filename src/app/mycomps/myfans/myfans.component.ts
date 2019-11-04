
import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Country} from './country';
import {CountryService} from './country.service';
import {NgbdSortableHeader, SortEvent} from '../table05/sortable.directive';

import { ApiService } from '../../api.service'


@Component({
  selector: 'myfans',
  templateUrl: './myfans.component.html',
  // styleUrls: ['./myfans.component.css'], // not using this
  providers: [CountryService, DecimalPipe]
})




export class MyfansComponent  implements OnInit  {

  countries$: Observable<Country[]>;
  total$: Observable<number>;



  ngOnInit() {
    this.apiService.getUsers()
  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService, public apiService: ApiService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
