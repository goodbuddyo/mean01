import {Component, QueryList, ViewChildren} from '@angular/core';
import {DecimalPipe} from '@angular/common';

import {Observable} from 'rxjs';
import {CountryService} from './country.service';
import {Country} from './country';
import {NgbdSortableVenueHeader, SortVenueEvent} from './sortable.venue.directive';

@Component({
  // selector: 'ngbd-table-complete',  // selector not referenced anywhere
  templateUrl: './table-v-complete.html',
  // template: ` `,
  providers: [CountryService, DecimalPipe]
})
export class NgbdTableVenueComplete {
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
