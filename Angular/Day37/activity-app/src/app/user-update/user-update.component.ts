import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  object:any | undefined = undefined;
  constructor(private builder : FormBuilder, private service : UserService) { }

  
  id:FormControl=new FormControl('');
  

  profileForm: FormGroup = this.builder.group({
    id:['',Validators.required],
    name:['', Validators.required],
    gender:['', Validators.required],
    phoneNo:['',Validators.compose([Validators.minLength(10),Validators.maxLength(10),Validators.required])],
    emailId:['', Validators.required],
    address:this.builder.group({
      state:['', Validators.required],
      city:['', Validators.required],
      pin:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(6)])]
    })
  })

  setProfileValue(){
    this.profileForm.controls['id'].setValue(this.object.profileId);
    this.profileForm.controls['name'].setValue(this.object.name);
    this.profileForm.controls['gender'].setValue(this.object.gender);
    this.profileForm.controls['phoneNo'].setValue(this.object.phoneNo);
    this.profileForm.controls['emailId'].setValue(this.object.emailId);
    this.profileForm.controls['address'].get('state')?.setValue(this.object.address.state);
    this.profileForm.controls['address'].get('city')?.setValue(this.object.address.city);
    this.profileForm.controls['address'].get('pin')?.setValue(this.object.address.pin);
  }
  
  updateForm(){
    // console.log(this.profileForm.value)
    this.service.updateform(this.profileForm.value)
  }

  getInfo(){
    this.object=this.service.update(this.id.value)
    console.log(this.object)
  }

  ngOnInit(): void {
    
  }


  

}