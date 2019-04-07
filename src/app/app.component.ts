import { Component, OnInit } from '@angular/core';
import { DialogComponent } from "./dialog/dialog.component";
import { MatDialog } from '@angular/material';
import { FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  
  title = 'app';
  myControl = new FormControl();
  optio: string[] = ['One', 'Two', 'Three'];
  options: User[] = [
    {name: 'Mary', id: 101 },
    {name: 'Shelley', id: 102 },
    {name: 'Igor', id: 103 }
  ];
  filteredOptions: Observable<User[]>;
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  specie = [
    {name:"nameer",id:'1001'},
    {name:"namees",id:'1002'},
  ];
  constructor(
    private dialog: MatDialog,
    ) {
    }
    formatLabel(value: number | null) {
      if (!value) {
        return 0;
      }
      
      if (value >= 1000) {
        return Math.round(value / 1000) + 'k';
      }
      
      return value;
    }
    openDialog() {
      console.log('forgot password');
      this.dialog
      .open(DialogComponent, {
        width: "500px"
      })
      .afterClosed()
      // .subscribe(result => console.log(result));
    }
    addTask(id:number, value:  string) {
      this.options.push(
        {
          id : id,
          name: value
        });
    }
  }
  