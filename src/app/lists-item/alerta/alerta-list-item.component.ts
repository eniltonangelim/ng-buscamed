import { 
  Component, 
  OnInit,
  EventEmitter
 } from '@angular/core';


import { Alerta } from '../../model/alerta.model';
import { PagerService } from '../../pager/pager.service';
import { AlertaService } from '../../alerta/alerta.service';
import { Router } from '@angular/router';
import { AuthenticationService, AuthState } from '../../authentication/authentication.service';

@Component({
  selector: 'app-alerta-list-item',
  templateUrl: './alerta-list-item.component.html',
  styleUrls: ['./alerta-list-item.component.css']
})
export class AlertaListItemComponent implements OnInit {

  private allItems: Array<Alerta>;
  private headers: Array<any>;

  showNegativeMessage: boolean = false;
  active: boolean = false;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private pagerService: PagerService,
    private alertaService: AlertaService,
    private router: Router,
    private authService: AuthenticationService) { 
        this.headers = [
          {'name': 'Medicamento'},
          {'name': 'Preço'},
          {'name': 'Ativo'}
        ];
     }

  ngOnInit() {
    this.loadAlertas(this.authService.getUserLogged().id);
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
    this.alertaService.delete(id).subscribe(
      data => {
        this.loadAlertas(this.authService.getUserLogged().id)
      }
    );
    
  }

  onEditItem(alerta: Alerta){
    this.router.navigate(['alertas',alerta.id,'editar'])
  }

  loadAlertas(id: number): void {
    this.alertaService.listarByUser(id).subscribe(
      data => {
        this.allItems = data;
        this.setPage(1);
      },
      onerror => this.showNegativeMessage=true
    )
  }

  searchItem(term: string): void{
    this.alertaService.buscar(term).subscribe(
      data => {
        this.allItems = data;
        this.setPage(1);
      }//,
      //onerror => this.loadAlertas()
    )
  }

}
