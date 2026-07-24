import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudmediatorService {

  constructor(public http:HttpClient) { }
  id:any;
  
  addstudent(params:any){
    return this.http.post("https://springboot-backend1-production.up.railway.app/savestud",params)
  }
  getallstudentlist(){
    return this.http.get("https://springboot-backend1-production.up.railway.app/view")
  }
  getbyid(params:any){
    console.log(params);
    return this.http.get("https://springboot-backend1-production.up.railway.app/getid/"+params)
  }
  update(params:any){
    return this.http.put("https://springboot-backend1-production.up.railway.app/update",params)
  }
  delete(params:any){
    return this.http.get("https://springboot-backend1-production.up.railway.app/delete/"+params)
  }
  setid(data:any){
    this.id=data;
  }

}
