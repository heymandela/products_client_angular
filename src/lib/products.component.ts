import { Component, OnInit } from '@angular/core';
import { getAllWorkflowLevel1s } from '@libs/midgard-angular/src/lib/state/workflow-level1/workflow-level1.selectors';

@Component({
  selector: 'lib-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public tableOptions;
  public graphQlQuery;
  public selector;


  constructor() {
  }

  ngOnInit() {
    this.selector = getAllWorkflowLevel1s;
    this.defineTableOptions();
  }

  private defineTableOptions() {
    this.tableOptions = {
      columns: [
        {name: 'Name', prop: 'name', flex: 2, sortable: true, filtering: true},
        {name: 'Description', prop: 'description', flex: 2, sortable: true, filtering: true},
        {name: 'Date Created', prop: 'createDate', index: 1, flex: 1, cellTemplate: 'date', sortable: true},
        {name: '', cellTemplate: 'actions', actions: ['delete']},
      ]
    };
  }
}

