import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {

  produits? : Produit[]; 
  private produitService = new ProduitService();
  constructor(){
    //this.produits=produitService.listeProduits();
    
   }



  ngOnInit():void{
    this.produits=this.produitService.listeProduits();
  }
  supprimerProduit(prod : Produit){
    let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.produitService.supprimerProduit(prod);
    //console.log(prod);
  }

}
