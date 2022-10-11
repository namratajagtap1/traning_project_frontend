import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories!:Category[];
  constructor(public category:CategoryService) { }

  ngOnInit(): void {
    
    this.category.categories().subscribe((data:any)=>
    {
      this.categories=data;
      console.log(this.categories)
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error..","error in loading data","error");
    })
  }

}
