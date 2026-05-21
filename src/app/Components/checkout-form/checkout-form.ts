import { Component, inject, OnInit } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout-form',
  imports: [ReactiveFormsModule,MatStepperModule,MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.scss',
})
export class CheckoutForm implements OnInit{

  firstFormGroup!:FormGroup;
  paymentMethod!:FormGroup;
  private formBuilder = inject(FormBuilder)

  constructor() {

  }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      addressline1:['',Validators.required],
      addressline2:['',Validators.required],
      city:['',Validators.required],
       state:['',Validators.required],
        postalCode:['',Validators.required],
    })

    this.paymentMethod = this.formBuilder.group({
      nameOnCard:['',Validators.required],
      cardNumber:['',Validators.required],
      cardExpiry:['',Validators.required],
      cvv:['',Validators.required]
    })
  }
}
