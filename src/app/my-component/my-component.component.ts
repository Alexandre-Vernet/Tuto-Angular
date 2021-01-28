import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  age: number = 21;
  isDoNotDisturb: boolean = true;
  name: string = "Alex";

  students = [
    {
      name: "Alex",
      age: 21
    },
    {
      name: "Tobby",
      age: 999
    },
    {
      name: "Titeuf",
      age: 12
    }
  ];

  date = new Date();


  constructor() { }

  ngOnInit() {
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }

  incrementeAge(): void {
    this.age++;
  }

  call(): void {
    console.log("Dring Dring");
  }

  changeState(): void {
    this.isDoNotDisturb = !this.isDoNotDisturb;
  }

}
