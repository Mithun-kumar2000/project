import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../shared/task-service/tasks.service';
import { TaskcreateComponent } from '../../create-task/taskcreate/taskcreate.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskdetails',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './taskdetails.component.html',
  styleUrl: './taskdetails.component.scss'
})
export class TaskdetailsComponent implements OnInit{
constructor(private ts:TasksService,private router:Router){}
tsk:any=[]
public disp=false;
public show=false;
 ngOnInit(){
  // console.log(this.ts.getdata());
  this.tsk=this.ts.getdata()
  console.log(this.tsk);
 }
 gotocreate(){
this.router.navigateByUrl("/create")
 }

deletetask(){
  this.disp=true;
}
hides(){
  this.disp=false;
}
rmvtsk(rmv:string){
  //   console.log(this.tsk);
  // delete this.tsk[rmv];
  // console.log(this.tsk)
    this.tsk=this.tsk.filter((obj: { Title: string; }) => obj.Title !== rmv);
  }
  updatetask(){
    this.show=true;
  }
  uphds(){
    this.show=false;
  }
  updttsk(oldttl:string,ttl:string,dsc:string,due:Date,priority:string,status:string)
  {
  // console.log(oldttl);
    for(let i=0;i<this.tsk.length;i++){
      // console.log(this.tsk[2])
      // break;
   if(this.tsk[i].Title==oldttl){
    this.tsk[i].Title=ttl;   
    this.tsk[i].Desc=dsc;
    this.tsk[i].Due=due;
    this.tsk[i].Priority=priority;
    this.tsk[i].Status=status;
   }
   else{
    console.log("bbbb")
   }
   }
  }
} 