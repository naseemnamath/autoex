import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  specie = [
    {name:"nameer",id:'1001'},
    {name:"namees",id:'1002'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
