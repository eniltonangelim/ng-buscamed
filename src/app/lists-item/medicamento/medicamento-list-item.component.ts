import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter
 } from '@angular/core';

import { Medicamento } from '../../model/medicamento.model';
import { PagerService } from '../../pager/pager.service';
import { MedicamentoService } from '../../medicamento/medicamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamento-list-item',
  templateUrl: './medicamento-list-item.component.html',
  styleUrls: ['./medicamento-list-item.component.css']
})
export class MedicamentoListItemComponent implements OnInit {

  private allItems: Array<Medicamento>;
  private headers: Array<any>;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<Medicamento>();
  showNegativeMessage: boolean = false;
  active: boolean = false;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private pagerService: PagerService,
    private medicamentoService: MedicamentoService,
    private router: Router) { 
        this.headers = [
          {'name': 'Nome'},
          {'name': 'Laboratorio'},
          {'name': 'Código de barras'}
        ] ;
     }

  ngOnInit() {
    this.loadMedicamentos();
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
    this.medicamentoService.delete(id).subscribe(
      data => {
        this.loadMedicamentos();
      }
    );
    
  }

  onEditItem(medicamento: Medicamento){
    this.router.navigate(['medicamentos',medicamento.id,'editar'])
  }

  loadMedicamentos(): void {
    this.medicamentoService.listar().subscribe(
      data => {
        this.allItems = data;
        this.setPage(1);
      },
      onerror => this.showNegativeMessage=true
    )
  }

  searchItem(term: string): void{
    this.medicamentoService.buscar(term).subscribe(
      data => {
        this.allItems = data;
        this.setPage(1);
      },
      onerror => this.loadMedicamentos()
    )
  }

}