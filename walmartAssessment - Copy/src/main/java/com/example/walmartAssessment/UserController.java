package com.example.walmartAssessment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;



@RestController
public class UserController {

    List<Product> prodlist = new ArrayList<Product>();

    public UserController() {
        prodlist.add(new Product(
                "assets/images/30F2G7PS6L-0618_IS.jpeg",
                559,
                "Micheal Kors",
                11001,
                "Parker Medium Leather Shoulder Bag"
        ));

        prodlist.add(new Product(
                "assets/images/30F2G9HS7V-0782_IS.jpeg",
                352,
                "Micheal Kors",
                11002,
                " Greenwich Medium Logo Shoulder Bag"
        ));

        prodlist.add(new Product(
                "assets/images/30F2S7PC6E-0001_IS.jpeg",
                342,
                "Micheal Kors",
                11003,
                "Greenwich Medium Studded Saffiano Leather Shoulder Bag"
        ));
        prodlist.add(new Product(
                "assets/images/30F2S9HS7V-0041_IS.jpeg",
                362,
                "Micheal Kors",
                11004,
                "Parker Medium Metallic Snake Embossed Leather Shoulder Bag"
        ));
        prodlist.add(new Product(
                "assets/images/30S2S9HS7L-0030_IS.jpeg",
                564,
                "Micheal Kors",
                11005,
                " Jet Set Charm Small Metallic Logo Shoulder Bag"
        ));
        prodlist.add(new Product(
                "assets/images/32F2GT9C1M-0705_IS.jpeg",
                634,
                "Micheal Kors",
                11006,
                " Greenwich Medium Logo Shoulder Bag"
        ));
        prodlist.add(new Product(
                "assets/images/30F2G9HS7V-0782_IS.jpeg",
                352,
                "Micheal Kors",
                11007,
                " Eva Large Signature Logo Stripe Tote Bag"
        ));
        prodlist.add(new Product(
                "assets/images/40F2PKFB6L-2437_IS.jpeg",
                523,
                "Micheal Kors",
                11008,
                "Parker Logo and Leather Boot"
        ));

        prodlist.add(new Product(
                "assets/images/40F2PKME1E-0210_IS.jpeg",
                543,
                "Micheal Kors",
                11009,
                "Rue Pink Embellished Glitter Chain-Mesh Boot"
        ));

        prodlist.add(new Product(
                "assets/images/MK7299-0040_IS.jpeg",
                2123,
                "Micheal Kors",
                11010,
                "Oversized Emery Pavé Silver-Tone Curb-Link Watch"
        ));

        prodlist.add(new Product(
                "assets/images/MK8909-0710_IS.jpeg",
                1233,
                "Micheal Kors",
                11011,
                "Oversized Jessa Rose Gold-Tone and Logo Embossed Silicone Watch"
        ));
        prodlist.add(new Product(
                "assets/images/MK8980-0001_IS.jpeg",
                6431,
                "Micheal Kors",
                11012,
                "Oversized Slim Runway Black-Tone Watch"
        ));

    }

    @GetMapping("/search/{id}")
   public ResponseEntity<Product> prod(@PathVariable int id){

        Product product = null;
        for(Product product1: prodlist) {

            if(product1.getId() == id) {
                product = product1;
                break;
            }

        }
        System.out.println(product.getId());
         return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @GetMapping("/word/{searchword}")
    public ResponseEntity<List<Product>>prod(@PathVariable String searchword){
        ArrayList<Product> searchprod = new ArrayList<>();
        Product product = null;
        for(Product product1: prodlist) {
            if(product1.getDescription().toLowerCase().contains(searchword.toLowerCase())) {
                product = product1;
                searchprod.add(product);
            }
        }

        return new ResponseEntity<List<Product>>(searchprod, HttpStatus.OK);
    }

    @GetMapping("/search/all")
    public ResponseEntity<List<Product>> prodlist(){
            System.out.print("Hi");
        return new ResponseEntity<List<Product>>(prodlist, HttpStatus.OK);
    }


}





























