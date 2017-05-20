import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter
 } from '@angular/core';

import { Farmacia } from '../model/farmacia.model';
import { PagerService } from '../pager/pager.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() allItems: Array<Farmacia>;
  @Input() headers: Array<string>;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<Farmacia>();

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private pagerService: PagerService) { }

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onDeleteItem(id: number){
    this.onDelete.emit(id);
  }

  onEditItem(farmacia: Farmacia){
    this.onEdit.emit(farmacia);
  }

}
