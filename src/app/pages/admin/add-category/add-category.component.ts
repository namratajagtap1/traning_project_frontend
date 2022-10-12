import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
category={
  name:''
}
  constructor(private categoryService:CategoryService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formsubmit(){
    if(this.category.name.trim()==''||this.category.name==null){
      this.snack.open("Name is Required!!!!",'',{
        duration:2000,
      });
      return
    }
    this.categoryService.addCategory(this.category).subscribe(
      (data:any)=>{
        this.category.name='';
        Swal.fire("Success","category added succesfully","success");
      },
      (error)=>{
        console.log(error)
        Swal.fire("Error","something went wrong","error");
      }

    )
  }
  

}
