import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../services/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = 'financial-service';
 

  constructor(private productService: ClientService) {
    
  }

  ngOnInit() {
    // this.productService.getProductsSmall().then(products => {
    //   this.products = products;
    // });
  }

}
