import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchItemService } from '../../search-item/search-item.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
import { PagerService } from '../../pager/pager.service';
import { AuthenticationService, AuthState } from '../../authentication/authentication.service';
import { Medicamento } from '../../model/medicamento.model'
import { Alerta } from '../../model/alerta.model'

import { flyinOut } from '../../_animations/flyInOut';
import { statusToggle } from '../../_animations/statusToggle';

@Component({
  selector: 'app-medicamento-card-list',
  templateUrl: './medicamento-card-list.component.html',
  styleUrls: ['./medicamento-card-list.component.css'],
  animations: [flyinOut, statusToggle]
})
export class MedicamentoCardListComponent implements OnDestroy {

  private alerta: Alerta = new Alerta();
  private allItems: Medicamento[];
  private medicamentos: Medicamento[];
  private medicamentoObserver: Observable<Medicamento[]>;
  private authChangeSubscription_: Subscription;

  private state: string = 'inactive';

  inscricao: Subscription;
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  // logged
  loggedIn:boolean;

  constructor(
    private pagerService: PagerService,
    private searchItemService: SearchItemService,
    private router: Router,
    private authService: AuthenticationService
  ) { 
      // Atualiza a pesquisa    
      this.inscricao = this.searchItemService.searchChange.subscribe(
        newResult => this.changeMedicamento(newResult)
      )

      // Usuario logado
      this.authChangeSubscription_ = 
      authService.authChange.subscribe(
          newAuthState =>
          this.loggedIn = (newAuthState === AuthState.LoggedIn)
      );
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

  ngOnDestroy() {
    this.inscricao.unsubscribe();
    this.authChangeSubscription_.unsubscribe();
  }

  registerAlerta(precoAlvo: number, medicamento: Medicamento){
    this.alerta.precoAlvo = precoAlvo;
    this.alerta.medicamento = medicamento;
    this.alerta.ativado = true;
    this.alerta.usuario = this.authService.getUserLogged();
    this.searchItemService.cadastrarAlerta(this.alerta)
      .subscribe(
        () => this.router.navigate(['alertas'])
      )
  }

  changeMedicamento(medicamentos: Medicamento[]){
    this.allItems = medicamentos;
    this.setPage(1);
  }

  private toggleState(): void {
    if (this.state === 'inactive') {
      this.state = 'active';
    } else {
      this.state = 'inactive';
    }
  }

}
