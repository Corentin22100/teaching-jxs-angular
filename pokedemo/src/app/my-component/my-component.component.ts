import { Component, OnInit } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';
import { Pokemon,PokeDetail } from '../pokemon';
import { PokeAPIServiceService } from '../poke-apiservice.service';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [PokeAPIServiceService],

})
export class MyComponentComponent  implements OnInit {

id: string ="";
selectedPokeId : string="";
searchPokeName ='';
pokes: Pokemon[] = [];
pokeDetail: PokeDetail | undefined;
myDate: Date | null = null;


constructor(private pokeService: PokeAPIServiceService,
  private pokeShareInfoService: PokeShareInfoService
) { 

}
ngOnInit(): void {
  console.log('ngOnInit START');
  this.pokeService.getPokemon().subscribe((data) => {
    console.log('Pokemon API received');
    data.results.forEach((e, index) => {
      index++;
      this.pokes.push(new Pokemon('' + index, e.name, e.url));
    });
  });
}

  
  go(){
  this.pokeShareInfoService.setObservable(this.selectedPokeId)

    if(this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe((data) => {
        this.pokeDetail = data;
        this.pokeShareInfoService.setObservable(this.selectedPokeId)
      });   
    }
  }
}
