import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebService {


  constructor(private http: HttpClient) {
   }

  // getProdByID(id: number): Product {
  //   return this.getAll().find(webs => webs.id == id)!;
  // }

  getProdById(id: number): Observable<Product> {

    return this.http.get<Product>('http://localhost:8085/search/' + id);
}

getProdByWord(searchword: String): Observable<Array<Product>> {
  return this.http.get<Array<Product>>('http://localhost:8085/word/'+ searchword);
}


// getProdByWord(searchword: String): Observable<Product> {
//   return this.http.get<Product>(`${"http://localhost:8085/search/"}/${searchword}`);
// }

  getAll():Observable<Array<Product>>{
      return this.http.get<Array<Product>>("http://localhost:8085/search/all");
  }
  // getAll():Product[]{
  //   return[ {
    
  //     imgurl: 'assets/images/30F2G7PS6L-0618_IS.jpeg',
  //     price: 559,
  //     description: 'Parker Medium Leather Shoulder Bag',
  //     brand: 'Micheal Kors',
  //     id: 11001,
  //     detaileddesc: "Polyester,Pu Leather【Exquisite Texture】Handmade by skilled craftsman, high quality faux leather which is soft and durable, smooth polyester interior ensures wonderful touching. \n Reinforced hardware and meticulous sewing make it more durable.【Capacity】Interiors: 2 main pockets, 2 zipper pockets, 1 license pocket. It is enough to carry your cellphone, vehicle keys, passports, cards, cash, lipsticks, and other daily essentials.\n【Size】Dimensions: (L*W*H): 10.2 in(L)×3.7 in(W)×7.5 in(H). The weight is 1.1 lb.\n【Design】 It can be used in two ways with top handle and crossbody sling. Modern and Classic design which is vogue and never out of date, it fits more outfits and situations.\n【Scene to Use】 It is the best choice for dating, shopping, party, working and evening out. Best choice as a gift: one of the most special gifts for Mother's Day, Birthdays, Christmas, Anniversaries, and other Special Occasions."
    
  //   }, {
  //     imgurl: 'assets/images/30F2G9HS7V-0782_IS.jpeg',
  //     price: 352,
  //     description: 'Greenwich Medium Logo Shoulder Bag',
  //     brand: 'Micheal Kors',
  //     id: 11002 
  //   }, {

  //    imgurl: 'assets/images/30F2S7PC6E-0001_IS.jpeg',
  //    price: 453,
  //    description: 'Greenwich Medium Studded Saffiano Leather Shoulder Bag',
  //    brand: 'Micheal Kors',
  //    id: 11003
  //   }, 
  //   {
  //     imgurl: 'assets/images/30F2S9HS7V-0041_IS.jpeg',
  //     price: 754,
  //     description: 'Parker Medium Metallic Snake Embossed Leather Shoulder Bag',
  //     brand: 'Micheal Kors',
  //     id: 11004
  //   }, 
  //   {
  //     imgurl: 'assets/images/30S2S9HS7L-0030_IS.jpeg',
  //     price: 632,
  //     description: 'Jet Set Charm Small Metallic Logo Shoulder Bag',
  //     brand: 'Micheal Kors',
  //     id: 11005
  //   }, {
  //     imgurl: 'assets/images/32F2GT9C1M-0705_IS.jpeg',
  //     price: 654,
  //     description: 'Eva Large Signature Logo Stripe Tote Bag',
  //     brand: 'Micheal Kors',
  //     id: 11006
  //   }
  //   , {
  //     imgurl: 'assets/images/40F2PKFB6L-2437_IS.jpeg',
  //     price: 64,
  //     description: 'Parker Logo and Leather Boot',
  //     brand: 'Micheal Kors',
  //     id: 12001
  //   }
  //   , {
  //     imgurl: 'assets/images/40F2PKFB6L-2437_IS.jpeg',
  //     price: 53,
  //     description: 'Dover Python Embossed Faux Leather Knee Boot',
  //     brand: 'Micheal Kors',
  //     id: 12002
  //   }
  //   , {
  //     imgurl: 'assets/images/40F2PKFB6L-2437_IS.jpeg',
  //     price: 65,
  //     description: 'Rue Embellished Glitter Chain-Mesh Boot',
  //     brand: 'Micheal Kors',
  //     id: 12003
  //   }
  //     , {
  //     imgurl: 'assets/images/40F2PKME1E-0210_IS.jpeg',
  //     price: 65,
  //     description: 'Rue Pink Embellished Glitter Chain-Mesh Boot',
  //     brand: 'Micheal Kors',
  //     id: 12003
  //   }
      
  //   , {
  //     imgurl: 'assets/images/MK7299-0040_IS.jpeg',
  //     price: 764,
  //     description: 'Oversized Emery Pavé Silver-Tone Curb-Link Watch',
  //     brand: 'Micheal Kors',
  //     id: 13001
  //   }
     
  //   , {
  //     imgurl:  'assets/images/MK8909-0710_IS.jpeg',
  //     price: 424,
  //     description: 'Oversized Jessa Rose Gold-Tone and Logo Embossed Silicone Watch',
  //     brand: 'Micheal Kors',
  //     id: 13002
  //   }
  //   , {
  //     imgurl:  'assets/images/MK8980-0001_IS.jpeg',
  //     price: 543,
  //     description: 'Oversized Slim Runway Black-Tone Watch',
  //     brand: 'Micheal Kors',
  //     id: 13003
  //   }
    
  //   ]
  // }
}
