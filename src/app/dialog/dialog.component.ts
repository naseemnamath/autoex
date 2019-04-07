import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() optioz: string;
  
  specie = [
    {name:"nameer",id:'1001'},
    {name:"namees",id:'1002'},
  ];
  // optio: string[] = ['One', 'Two', 'Three'];
  constructor() { }

  ngOnInit() {
  }

}
