import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AddTodoDialogComponent } from '@features/todos/add-todo-dialog/add-todo-dialog.component';

@Component({
  selector: 'extendable-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss'],
})
export class ShellWrapperComponent implements OnInit {
  // TODO remove
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  public ngOnInit(): void {
    this.drawer.open();
  }

  constructor(protected router: Router, private dialog: MatDialog) {}

  protected openAddTodoDialog() {
    this.dialog.open(AddTodoDialogComponent, {
      width: '400px',
      position: { top: '100px' },
      backdropClass: 'is-transparent',
      ariaLabel: 'Add Todo dialog',
    });
  }
}
