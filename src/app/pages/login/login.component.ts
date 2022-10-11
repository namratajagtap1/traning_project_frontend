import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    username:'',
    password:'',
  };

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log("button clicked");

    if(this.loginData.username.trim()==''|| this.loginData.password==null){
this.snack.open('username is required','',{
duration:2000,
});
return;
    }

    if(this.loginData.password.trim()==''|| this.loginData.password==null){
      this.snack.open('password is required','',{
      duration:2000,
      });
      return;
          }
          //token
          this.login.generateToken(this.loginData).subscribe(
            (data:any)=>{
              console.log("success");
              console.log(data);
              //login
              this.login.loginUser(data.token);
              this.login.getCurrentUser().subscribe(
                (user:any)=>{
                  this.login.setUser(user);
                  console.log(user);
                  //admin customer
                  if(this.login.getUserRole()=="admin"){
                     window.location.href='/admin';
                   // this.router.navigate(['admin']);
                  }else if(this.login.getUserRole()=="customer"){
                     window.location.href='/customer';
                    // this.router.navigate(['customer']);
                  }  else if(this.login.getUserRole()=="customerExecutive"){
                     window.location.href='/customerexecutive';
                    //this.router.navigate(['customerexecutive'])
                  }else{
                    this.login.logout();
                  }

                });

             },
             (error)=>{
              console.log("Error");
              console.log(error);
              this.snack.open('invalid detail !! try again','',{
                duration:2000
              })
             }

          );
  }

}
