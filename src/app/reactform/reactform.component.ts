import { Component, OnInit } from '@angular/core';

import {FormBuilder,Validators,FormArray, Form} from '@angular/forms';
import {Passwordvalidator} from '../validation/password';
import {name} from '../validation/onlyname';
import {ReactformService} from '../reactform.service'

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  

  constructor(public fb:FormBuilder,private service:ReactformService) { }
      public success;
  /* Registration = new FormGroup({
     username:new FormControl(''),
     password:new FormControl(''),
     cfpassword:new FormControl(''),
     address:new FormGroup({city:new FormControl(''),postalcode:new FormControl(''),state:new FormControl('')})
    })*/

    Registration =this.fb.group({
      username:['',[Validators.required,Validators.minLength(3),name]],
      password:['',Validators.required],
      cfpassword:['',Validators.required],
      address:this.fb.group({
      city:['',Validators.required],
      postalcode:['',Validators.required],
      state:['',Validators.required]  
      }),
      alteranateEmail:this.fb.array([''])},
     {validator:Passwordvalidator}
    )

    get alternateemail()
    {
      return this.Registration.get('alteranateEmail') as FormArray;
    }

    addclick()
    {
      this.alternateemail.push(this.fb.control(''));
    }
  ngOnInit(): void {
  }
   /* loadapi()
  {
    this.Registration.patchValue({ //setvalue should mention all details in registration
      username:'sahitya'
    })
  }
  */
 get name()
  {
    return this.Registration.get('username')
  }

  get cfpassword()
  {
    return this.Registration.get('cfpassword')
  }
  onsubmit()
  {
    this.service.reactdata(this.Registration.value).subscribe(x=>this.success=x)
    this.Registration.reset();
  }
}
