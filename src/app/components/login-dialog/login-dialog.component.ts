import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { constancia } from 'src/app/models/Login.model';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: constancia) {}

  
  ngOnInit() {
    console.log('dialog', this.data);
    this.data.image = `../../../assets/images/login-dialog/${this.data.sexo}_${Math.floor(Math.random() * 3) + 1}.jpg`
    console.log(this.data.image)
  }

}
