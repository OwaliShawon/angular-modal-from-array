import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-data-example',
  templateUrl: 'dialog-data-example.html',
})
export class DialogDataExample {
  constructor(public dialog: MatDialog) {}
  public animalV: any[] = [
    { name: 'panda' },
    { name: 'unicorn' },
    { name: 'lion' },
    { name: 'owali' },
  ];

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: this.animalV,
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
