import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter
 } from '@angular/core';

import { Farmacia } from '../../model/farmacia.model';
import { PagerService } from '../../pager/pager.service';
import { FarmaciaService } from '../../farmacia/farmacia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmacia-list-item',
  templateUrl: './farmacia-list-item.component.html',
  styleUrls: ['./farmacia-list-item.component.css']
})
export class FarmaciaListItemComponent implements OnInit {

  private allItems: Array<Farmacia>;
  private headers: Array<any>;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<Farmacia>();
  showNegativeMessage: boolean = false;
  active: boolean = false;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private pagerService: PagerService,
    private farmaciaService: FarmaciaService,
    private router: Router) { 
        this.headers = [
          {'name': 'Farmacia'},
          {'name': 'Endereco'},
          {'name': 'Complemento'}
        ] ;
     }

  ngOnInit() {
    this.loadFarmacias();
  }

  setPage(page: number) {

    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page, 10);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onDeleteItem(id: number){
    this.farmaciaService.delete(id).subscribe(
      data => {
        this.loadFarmacias();
      }
    );
    
  }

  onEditItem(farmacia: Farmacia){
    this.router.navigate(['farmacias',farmacia.id,'editar'])
  }

  loadFarmacias(): void {
    this.farmaciaService.listar().subscribe(
      data => {
        this.allItems = data;
        this.setPage(1);
      },
      onerror => this.showNegativeMessage=true
    )
  }

  searchItem(term: string): void{
    this.farmaciaService.buscar(term).subscribe(
      data => {
        this.allItems = data;
        this.setPage(1);
      },
      onerror => this.loadFarmacias()
    )
  }

}