import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitchgit',
  templateUrl: './lightswitchgit.component.html',
  styleUrls: ['./lightswitchgit.component.css']
})
export class LightswitchgitComponent implements OnInit {

  isOn = false;
  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`
  }
  constructor() { }

  ngOnInit(): void {
  }

}
