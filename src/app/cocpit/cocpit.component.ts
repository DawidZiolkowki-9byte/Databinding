import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocpit',
  templateUrl: './cocpit.component.html',
  styleUrls: ['./cocpit.component.css']
})
export class CocpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
