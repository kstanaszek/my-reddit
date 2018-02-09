import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

function skuValidator(control: FormControl): {[s: string]: boolean} {
  if(!control.value.match(/^123/)){
    return {invalidSku: true}
  }
}

@Component({
  selector: 'app-form-sku-builder',
  templateUrl: './form-sku-builder.component.html',
  styleUrls: ['./form-sku-builder.component.css']
})
export class FormSkuBuilderComponent implements OnInit {

  myForm: FormGroup;
  //sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.compose([Validators.required, skuValidator])]
    });
    //this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
