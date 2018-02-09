import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';


@Component({
  selector: 'app-form-sku-builder',
  templateUrl: './form-sku-builder.component.html',
  styleUrls: ['./form-sku-builder.component.css']
})
export class FormSkuBuilderComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
