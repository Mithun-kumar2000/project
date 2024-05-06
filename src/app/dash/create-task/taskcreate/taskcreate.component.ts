import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../../shared/task-service/tasks.service';

@Component({
  selector: 'app-taskcreate',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,],
  templateUrl: './taskcreate.component.html',
  styleUrl: './taskcreate.component.scss'
})
export class TaskcreateComponent implements OnInit{
  dummy:any=[];
  tsk:any=[];
  myform!: FormGroup;
  constructor(private ts:TasksService,private formBuilder:FormBuilder){}
  ngOnInit(): void {
      this.tsk=this.ts.getdata();
      this.myform = this.formBuilder.group({
        title: ['', [Validators.required]],
        desc: ['', [Validators.required]],
        due: ['', [Validators.required]],
        prio: ['', [Validators.required]],
        status: ['', [Validators.required]],
      })
  }
  addtsk()
{
  if(this.myform.invalid)
    {
      alert("Please fill all details")
    }
    else if(this.myform.valid){
  this.tsk.push(this.dummy);
  alert("Success")
  console.log(this.tsk)
}
}

}
