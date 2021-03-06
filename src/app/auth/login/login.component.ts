import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errors: any[] = [];
  notifyMessages: string ='';

  constructor(private formB : FormBuilder, private auth : AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.activatedRoute.params.subscribe((params) => {
      if(params['registed'] == 'successed'){
        this.notifyMessages = 'you have been registerd successfully. Please login'
      }
    });
  }

  initForm(){
    this.loginForm = this.formB.group({
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['',Validators.required],
    })
  }

  isInvalidForm(filedName): boolean {
    return this.loginForm.controls[filedName].invalid
    && (this.loginForm.controls[filedName].dirty || this.loginForm.controls[filedName].touched
    || this.loginForm.controls[filedName].errors.required
    || this.loginForm.controls[filedName].errors.pattern);
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(
      (token) => {
        this.router.navigate(['/rentals']);
      },
      (errorResponse)=>{
        this.errors = errorResponse.error.errors;
      })
  }
}
