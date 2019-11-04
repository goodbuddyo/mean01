
import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Country} from './country';
import {CountryService} from './country.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';


@Component({
  selector: 'table05',
  templateUrl: './table05.component.html',
  // styleUrls: ['./table05.component.css'], // not using this
  providers: [CountryService, DecimalPipe]
})

export class Table05Component  {

  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
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