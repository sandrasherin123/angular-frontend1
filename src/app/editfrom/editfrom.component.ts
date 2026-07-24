import { Component, OnInit } from '@angular/core';
import { CrudmediatorService } from '../crudmediator.service';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-editfrom',
  templateUrl: './editfrom.component.html',
  styleUrls: ['./editfrom.component.css']
})
export class EditfromComponent implements OnInit{
  id:any;
  student:Student ={
    id: 0,
    name: '',
    age: 0
    
  }
  updatedata(data:any){
    console.log(data)
    this.smediator.update(data).subscribe(
      (res:any)=>{
        this.r.navigate(['studentlist']);
      }
    )
  }
  
  constructor(public smediator:CrudmediatorService,public r:Router){}
  ngOnInit(): void {
    this.id=this.smediator.id;
    this.smediator.getbyid(this.id).subscribe(
      (res:any)=>{
        this.student=res;
      }
    )

  }

}
