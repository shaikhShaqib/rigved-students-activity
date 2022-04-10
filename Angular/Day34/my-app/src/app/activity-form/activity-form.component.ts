import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname : string | undefined = undefined; 
  lastname : string | undefined = undefined; 
  gender : string | undefined = undefined; 
  skill : string | undefined = undefined; 
  qualification : string | undefined = undefined; 
  address : string | undefined = undefined; 

  formValues(formValue : any) : void {
    // console.log(formValue);
    this.firstname = formValue.fn;
    this.lastname = formValue.ln;
    this.gender = formValue.gn;
    this.skill = formValue.sk;
    this.qualification = formValue.qf;
    this.address = formValue.add;
  }

  hide : boolean = true;
  show() : void {
    let content = document.getElementById("d2");
    this.hide = !this.hide;
  }
}

