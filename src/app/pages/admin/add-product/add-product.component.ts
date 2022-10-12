import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories!:Category[];

  public productData={
    pName:'',
    price:'',
     discount:'',
     numOfproduct:'',
     available:true,
    category:{
      catId:'',
     },
  };


  constructor(private category:CategoryService,private snack:MatSnackBar,private productService:ProductService) { }

  ngOnInit(): void {
    this.category.categories().subscribe((data:any)=>
    {
      this.categories=data;
      console.log(this.categories)
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error..","error in loading data","error");
    }
    );
  }


  formsubmit(){
    if(this.productData.pName.trim()==''||this.productData.pName==null){
           this.snack.open("Name is Required!!!!",'',{
          duration:2000,
          });
          return;
        }

        //validation
        this.productService.addProduct(this.productData).subscribe(
          (data)=>{
            Swal.fire('Success','product added','success')
           
          },
          (error)=>{
            Swal.fire('Error','product not added','error')
          }
        );
  }

}

