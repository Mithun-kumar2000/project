import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [RouterModule,RouterLink,FormsModule,CommonModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})
export class LogComponent {
user: any;
pswd: any;
constructor(private router:Router){}
logauthenticate(username:string,pswd:string)
{
  if(username==="user" && pswd==="password")
    {
      localStorage.setItem("username","user");
      localStorage.setItem("pswd","password");
      this.router.navigateByUrl("/dashhome");
    }
    else{
      alert("Invalid Username or Password");
    }
}
logout()
{
  localStorage.clear()
}

}
