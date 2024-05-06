import { Component, OnInit } from '@angular/core';
import { PrflServiceService } from '../../../shared/profile-service/prfl-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileupdtComponent } from '../../profile-update/profileupdt/profileupdt.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,ProfileupdtComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  constructor(private pf:PrflServiceService,private router:Router){}
dtl:any=[]
ngOnInit(): void {
    this.dtl=this.pf.getdata();  
    console.log(this.dtl)
  }
  update(){
this.router.navigateByUrl("/update")
  }
  password(){

  }
}
