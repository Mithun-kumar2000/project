import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrflServiceService {
  prfl=[{Name:"Mithun Kumar",Email:"mithun123@gmail.com",Phone:"8848033898",Designation:"Developer",
  District:"Pathanamthitta",State:"Kerala",Country:"India"},]
  constructor() { }
  getdata()
  {
    return this.prfl;
  }
  updatedata(newdata:any[]){
this.clearData()
    // Add new data
    newdata.forEach(item => {
      this.prfl=(item);
    });
  }
  clearData(){
    this.prfl=[]
  }
}
