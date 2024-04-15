import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'register-app';
  value1: string = '';
  value2: string='';
  value3: boolean=false;
  allRegistered: Array<Register> = [];

  addPerson() {
    if (this.value1.trim() == '') {
      return;
    }
    if (this.value2.trim() == '') {
      return;
    }

  var newValue:Register={
    name:this.value1,
    lastName:this.value2,
    isPresent:this.value3
  };

  this.allRegistered.push(newValue);
  this.value1='';
  this.value2='';
  this.value3=false;
  }

  deletePerson(i: number){

    this.allRegistered.splice(i,1)
  }
}

interface Register {
  name:string;
  lastName:string;
  isPresent:boolean;

}
