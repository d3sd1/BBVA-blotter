import {Component, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {FetchDataService} from '../../core/services/fetch-data.service';
import {ExportAsService} from 'ngx-export-as';

@Component({
  selector: 'app-blotter',
  templateUrl: './blotter.component.html',
  styleUrls: ['./blotter.component.scss']
})
export class BlotterComponent {

  view = [
    {title: 'Profile'},
    {title: 'Logout'},
  ];
  platform = [
    {title: 'Profile'},
    {title: 'Logout'},
  ];
  rows = [];

  temp = [];

  columns = [
    {prop: 'id', name: 'Deal ID'},
    {prop: 'type', name: 'Product Type'},
    {prop: 'client', name: 'Client name'},
    {prop: 'state', name: 'Current state'},
    {prop: 'status', name: 'Status'},
    {prop: 'process', name: 'Process'},
    {prop: 'format', name: 'Format'},
    {prop: 'currency', name: 'Currency'},
    {prop: 'description', name: 'Description'},
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(private fetchDataService: FetchDataService,
              private exportAsService: ExportAsService) {
    this.loadData();
  }

  export(): void {

  }

  loadData(): void {
    const data = this.fetchDataService.loadBlotter();
    this.temp = [...data];
    this.rows = data;
  }

  updateFilter(event): void {
    const val = event.target.value.toLowerCase();

    // filter our data
    this.rows = this.temp.filter((d) => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
