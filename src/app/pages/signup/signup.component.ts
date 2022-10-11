import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService ) { }

  public user={
    userName:'',
   password:'',
    firstName:'',
   lastName:'',
    mobNo:'',
  profile:'',
    email:''

  };

  ngOnInit(): void {
      }

      formsubmit(){
       
        console.log(this.user);
        if(this.user.userName==''||this.user.userName==null){
          alert('user is required');
        
          return;
        }

        //adduser
        this.userService.addUser(this.user).subscribe(
          (data:any)=>{
            console.log(data);
            // alert('success');
            Swal.fire('Success',data.id+' id user is registered','success');
          },
          (error)=>{
            console.log(error)
            alert('something went wrong');
          }
          );

        
        }

        
      
      
}
