import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/components/login-dialog/login-dialog.component';
import { dni_tipo, sexo } from 'src/app/models/Login.model';

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

  // tiposDni = Object.keys(dni_tipo).map((key: string) => ({
  //   key: key,
  //   value: dni_tipo[key],
  //   selected: (key == 'dni')
  // }));

  tiposDni = dni_tipo;
  sexos = sexo;
  
  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit() {
    this.constancia.valueChanges.subscribe((changes)=>{
      // console.log(changes)
    })
  }

  // Submit
  enviar(){
    // console.log(this.constancia)
    this.openDialog()
  }

  openDialog(){
    this.dialog.open(LoginDialogComponent, {
      data: this.constancia.value,
    });
  }

  
}


