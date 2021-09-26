import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service'
import { FormGroup, FormBuilder  } from "@angular/forms";
import {dashboardmodel} from './dashboard.model'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todoList=[];
  todoArr:any =[];
  formvalue:any;
  dashboardModelObj:dashboardmodel = new dashboardmodel();
  Data: any;
  constructor(private sharedService:SharedService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    
    this.sharedService.getData().subscribe(
      (res:any)=>{
        console.log(res)
        this.todoList=res;
        this.todoArr=this.todoList;
           console.log(this.todoArr);
           
      },
      (err:any)=>{
        console.log('Error in loading Todo api');
      }
    )




    this.formvalue =this.formbuilder.group({
      userId: [''],
      id:[''],
      title: [''],
      body: [''],
     

    })
    this.getAlldata();



   
  }
  postDetails()
  {
    this.dashboardModelObj.userId =this.formvalue.value.userId;
    this.dashboardModelObj.id = this.formvalue.value.id;
    this.dashboardModelObj.title = this.formvalue.value.title;
    this.dashboardModelObj.body = this.formvalue.value.body;
  this.sharedService.postData(this.dashboardModelObj).subscribe(res=>{
    console.log(res);
   alert("data successfully added");
   let ref=document.getElementById('cancel')
   ref ?.click();
   this.formvalue.reset();
   this.getAlldata();
   
  },
  err=>{
    alert("something went wrong");
  })
  
  }
  getAlldata(){
    this.sharedService.getData().subscribe(res => {
      this.Data = res;
    })
  }



  deletedata(item:any){
    this.sharedService.deleteData(item.id).subscribe(res=>{
      alert("data deleted");
      this.getAlldata();
    })
  }

  onEdit(item:any){
    this.formvalue.controls['userId'],setvalue(item.userId);
    this.formvalue.controls['id'],setvalue(item.id);
    this.formvalue.controls['title'],setvalue(item.title);
    this.formvalue.controls['body'],setvalue(item.body);
  }
}
  


function setvalue(userId: any) {
  throw new Error('Function not implemented.');
}

