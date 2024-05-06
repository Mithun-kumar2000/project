import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
tasks=[{Title:"Demo",Desc:"abcdefgh",Due:"10/05/2024",Priority:"High",Status:"Pending"},]
  constructor() { }
  getdata()
  {
    return this.tasks;
  }
  adddata(ttl:string,desc:string,due:string,prio:string,status:string)
  {
    this.tasks.push({Title:ttl,Desc:desc,Due:due,Priority:prio,Status:status})
  }
}
