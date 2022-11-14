import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchword:String = "";
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchword'])
      this.searchword = params['searchword'];
    })
  }
 search():void {
  if(this.searchword)
  this.router.navigateByUrl('/search/' + this.searchword);
 }
}
