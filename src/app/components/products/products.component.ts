import { Component, OnInit } from '@angular/core';
import { ProductRestService } from 'src/app/services/productRest/product-rest.service';
import { CategoryRestService } from 'src/app/services/categoryRest/category-rest.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  categorys:any;
  product: ProductModel;

  constructor(
    private productRest: ProductRestService,
    private categoryRest: CategoryRestService
  ) { 
    this.product = new ProductModel('','','',0,0,0,'');
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategorys();
  }

  getProducts(){
    this.productRest.getProducts().subscribe({
      next: (res:any)=> this.products = res.products,
      error: (err)=>alert(err.error.message)
    })
  }

  getCategorys(){
    this.categoryRest.getCategorys().subscribe({
      next: (res:any)=> this.categorys = res.categorys,
      error: (err)=>console.log(err)
    })
  }

  saveProduct(){
    this.productRest.saveProduct(this.product).subscribe({
      next: (res:any)=> alert(res.message),
      error: (err)=> alert(err.error.message || err.error)
    })
  }

}
