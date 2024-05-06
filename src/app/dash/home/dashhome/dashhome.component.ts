import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashhome',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  templateUrl: './dashhome.component.html',
  styleUrl: './dashhome.component.scss'
})
export class DashhomeComponent {
constructor(private router:Router){}
crttask(){
  this.router.navigateByUrl("/create");
}
taskdtl(){
  this.router.navigateByUrl("/details")
}
prfl(){
  this.router.navigateByUrl("/profile");
}
  logout()
{
    localStorage.clear();
    this.router.navigateByUrl("/login");
}
}
