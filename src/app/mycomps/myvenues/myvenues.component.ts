
import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Country} from './country';
import {CountryService} from './country.service';
import {NgbdSortableVenueHeader, SortVenueEvent} from './sortable.venue.directive';


@Component({
  selector: 'myvenues',
  templateUrl: './myvenues.component.html',
  // styleUrls: ['./myvenues.component.css'], // not using this
  providers: [CountryService, DecimalPipe]
})

export class MyvenuesComponent  {

  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableVenueHeader) headers: QueryList<NgbdSortableVenueHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortVenueEvent) {
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