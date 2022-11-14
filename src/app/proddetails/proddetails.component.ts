import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../services/web/Productlist';
@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.css']
})
export class ProddetailsComponent implements OnInit {
    prod!:Product;
  
  constructor(private  activatedRoute: ActivatedRoute, private prodservice : WebService ) {
    
    activatedRoute.params.subscribe((params) => {
       if(params['id']) 
         prodservice.getProdById(params['id']).subscribe(response => {
          this.prod = response;
         });
      
     })

   }
  
  ngOnInit(): void {
  }

}
