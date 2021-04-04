import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pairwise, shareReplay, startWith, take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ClientModel } from 'src/app/pages/models/client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  search = new FormControl();

  @Input() color: string;
  @Input() colorText: string;
  @Input() headerText: string;
  @Input() clientes: ClientModel[];

  @Output() searchControlEvent = new EventEmitter<any>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.searchCompany();
  }

  // Search companys name (reusable method)
  searchCompany() {
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged())
      .subscribe(value => {
        this.searchControlEvent.emit(value)
      }
      );
  }
}
