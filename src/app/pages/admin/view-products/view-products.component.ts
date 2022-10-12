import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  productObj!:Product[];

  displayedColumns = ['position', 'name', 'price', 'discount','numOfproduct','category','update','delete'];
  dataSource = this.productObj;



  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.getProducts().subscribe((data:any)=>
    {
      this.productObj=data;
      console.log(this.productObj)
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error..","error in loading data","error");
    })

  }

}
