import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constancia: FormGroup = new FormGroup({
    tipo: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    nacimiento: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit() {
    console.log("init");

    this.constancia.valueChanges.subscribe((changes)=>{
      console.log(changes)
    })
  }

  enviar(){
    console.log(this.constancia)
  }
  
}
