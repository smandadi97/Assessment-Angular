import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web/Productlist';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getLocaleCurrencyCode } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  web:Product[] = [];
  singleprod!: Product;
  allprod:Product[] = [];

  constructor(private webService: WebService, private route:ActivatedRoute,
    private http: HttpClient) {
      this.allprod = [];

     }
  
  ngOnInit(): void {
  
    this.route.params.subscribe(params =>  {
      
        if(params['searchword'] ){
          this.webService.getProdByWord(params['searchword']).subscribe(response => {
            this.web = response;
            console.log(params['searchword'] + "This is search word")
          })

          // this.webService.getAll().subscribe(response => {
          //   this.web = response;
          // })

          // return this.web.filter(response => {
          //   return response.id == (params['searchTerm'])
          // })
        
        // this.web = this.webService.getAll().filter(web => 
        //   web.description.toLowerCase().includes(params['searchTerm'].toLowerCase()))
        }

        // if(params['id']) {
        //   this.webService.getProdById(params['id']).subscribe(response => {
        //     this.singleprod = response;
        //     console.log(params['searchword'] + "This is search word")
        //   })
        // }
        
      else {
        this.webService.getAll().subscribe(response => {
          this.web = response;
        })
      }
    
    }) 
    
  }

}
