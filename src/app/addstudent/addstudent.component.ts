import { Component, OnInit } from '@angular/core';
import { CrudmediatorService } from '../crudmediator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  regdata(data:any){
    console.log(data);
    this.smediator.addstudent(data).subscribe(
      (res:any)=>{
        this.r.navigate(["studentlist"]);
      }
    )
  }

  constructor(public smediator:CrudmediatorService,public r:Router){}
  ngOnInit(): void {
  }

}
