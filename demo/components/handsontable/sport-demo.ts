import {Component} from '@angular/core';

import {handsontable} from '../../../components/index';
import {getSportData} from './data';


@Component({
  selector: 'sport-demo',
  template: require('./sport-demo.html')
})
export class SportDemo {
  private data:Array<any>;
  private colHeaders:Array<string>;
  private options:any;

  constructor() {
    this.data = getSportData();
    this.colHeaders = ['Rank', 'Team', 'Logo', 'Current Value ($mil)', '1-Yr Value Change (%)',
      'Debt/Value (%)', 'Revenue ($mil)', 'Operating Income ($mil)'];
    this.options = {
      height: 600,
      rowHeaders: false,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true,
      autoWrapRow: true,
      columns: [
        {data: 0, type: 'numeric'},
        {data: 1, type: 'text'},
        {data: 2, renderer: 'html', width: 200},
        {data: 3, type: 'numeric', format: '$0,0.00'},
        {data: 4, type: 'numeric', format: '0.00%'},
        {data: 5, type: 'numeric', format: '0.00%'},
        {data: 6, type: 'numeric', format: '$0,0.00'},
        {data: 7, type: 'numeric', format: '$0,0.00'}
      ],
      cells: function (row, col, prop) {
        let cellProperties:any = {};
        cellProperties.className = 'htMiddle htCenter';
        return cellProperties;
      }
    };
  }
}
