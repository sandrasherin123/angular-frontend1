import { Component, OnInit } from '@angular/core';
import { CrudmediatorService } from '../crudmediator.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  student:Student[] | undefined;

  constructor(public smediator:CrudmediatorService,public r:Router){}

    editdata(id:any){
      console.log(id);
      this.smediator.setid(id);
      this.r.navigate(["editform"]);
    }
    
    deletedata(data:any){
      this.smediator.delete(data).subscribe(
        (res:any)=>{
          this.smediator.getallstudentlist().subscribe(
            (res:any)=>{
              this.student=res;
            }
          )
        }
      )
    }
  

  ngOnInit(): void {
    this.smediator.getallstudentlist().subscribe(
      (res:any)=>{
        this.student=res;
      }
    )
  }

}
function editdata(id: any, any: any) {
  throw new Error('Function not implemented.');
}

