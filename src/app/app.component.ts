import { Component } from '@angular/core';
import { DialogComponent } from "./dialog/dialog.component";
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
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
}
