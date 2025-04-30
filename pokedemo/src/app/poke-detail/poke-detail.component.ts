import { Component, OnInit, Input } from '@angular/core';
import { PokeDetail } from '../pokemon';
import { PokeShareInfoService } from '../poke-share-info.service';
@Component({
  selector: 'app-poke-detail',
  standalone: false,
  templateUrl: './poke-detail.component.html',
  styleUrl: './poke-detail.component.css',
  providers: [],
})
export class PokeDetailComponent implements OnInit {

  @Input('detail')
  detail: PokeDetail | undefined;

  constructor( private pokeShareInfoService: PokeShareInfoService
  ) { 
    this.pokeShareInfoService.getObservable().subscribe(e => console.log('e ' + e));
  }
  ngOnInit(): void {
   
  }

  go() {
   
  }

}
