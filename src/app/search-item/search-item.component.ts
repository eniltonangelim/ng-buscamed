import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { SearchItemService } from './search-item.service';
import { Medicamento } from '../model/medicamento.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  //private searchTerms = new Subject<string>();
  //medicamentos: Observable<Medicamento[]>;

  constructor(
    private router: Router,
    private searchItemService: SearchItemService
    //private medicamentoService: MedicamentoService
  ) { }

  ngOnInit(): void {
    /*this.medicamentos = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.medicamentoService.searchByNome(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Medicamento[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Medicamento[]>([]);
      });*/
  }

  search(term: string) {
    this.searchItemService.buscar(term).subscribe(
      ()=> this.router.navigate(['result'])
    );
  }

  //searchByNome(term: string): Observable<Medicamento[]> {
    //return this.medicamentoService.searchByNome(term);
  //}

}
