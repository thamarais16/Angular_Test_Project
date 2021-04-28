import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product-service";
import { loggerService } from "../log";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ifStmt } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html', 
  styleUrls: ['./service.component.css'],
  providers: [ProductService, loggerService ]
})
export class ServiceComponent implements OnInit {  
  products: Product[];
  form: FormGroup;
  userData: Obj;
  constructor(
    @Inject(ProductService) private productService,
    @Inject(loggerService) private logger,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    //this.products = new ProductService().getProducts();
    this.products = this.productService.getProducts();
    this.logger.log(this.products);
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      id: ['', Validators.required]
    })
  }

  formSubmit(){
    if(this.form.valid){
      this.userData = this.form.value;
      console.log(this.userData);
    }else{
      alert("ero");
    }
  }

  rest(resett){
    this.form.reset();
    resett.resetForm();
    console.log(this.form.value);
  }

}

interface Obj{
  name: string;
  email: string;
  id: number;
}