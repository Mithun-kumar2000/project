import { Component, OnInit } from '@angular/core';
import { PrflServiceService } from '../../../shared/profile-service/prfl-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileupdt',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profileupdt.component.html',
  styleUrl: './profileupdt.component.scss'
})
export class ProfileupdtComponent implements OnInit{
new:any=[]
dtl:any=[]
  constructor(private pf:PrflServiceService,private router:Router){}
  ngOnInit(): void {
      this.dtl=this.pf.getdata();
      // console.log(this.dtl)
  }

onSubmit(){
  this.dtl.push(this.new)
  // this.pf.clearData()
this.pf.updatedata(this.dtl)
  // console.log(this.pf.prfl)
this.router.navigateByUrl("/profile")


}
}
