import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudmediatorService {

  constructor(public http:HttpClient) { }
  id:any;
  
  addstudent(params:any){
    return this.http.post("http://localhost:8080/savestud",params)
  }
  getallstudentlist(){
    return this.http.get("http://localhost:8080/view")
  }
  getbyid(params:any){
    console.log(params);
    return this.http.get("http://localhost:8080/getid/"+params)
  }
  update(params:any){
    return this.http.put("http://localhost:8080/update",params)
  }
  delete(params:any){
    return this.http.get("http://localhost:8080/delete/"+params)
  }
  setid(data:any){
    this.id=data;
  }

}
