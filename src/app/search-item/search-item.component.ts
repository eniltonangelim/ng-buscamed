import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { MedicamentoService } from '../medicamento/medicamento.service';
import { Medicamento } from '../model/medicamento.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  private searchTerm = new Subject<string>();
  medicamento: Observable<Medicamento[]>;

  constructor(
    private medicamentoService: MedicamentoService
  ) { }

  ngOnInit() {
    this.medicamento = this.searchTerm
    .debounceTime(300)        // wait for 300ms pause in events
    .distinctUntilChanged()   // ignore if next search term is same as previous
    .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.searchByNome(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Medicamento[]>([]))
    .catch(error => {
        // TODO: real error handling
        return Observable.of<Medicamento[]>([]);
    });
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

  searchByNome(term: any){
    return this.medicamentoService.searchByNome(term)
      .do(
        medicamentos => { 
          if ( medicamentos.length == 0 ) {
            console.log(medicamentos)
            Observable.of();
          } else {
            console.log(medicamentos)
            Observable.of(medicamentos) ;
          }
        }
      )
  }
}
