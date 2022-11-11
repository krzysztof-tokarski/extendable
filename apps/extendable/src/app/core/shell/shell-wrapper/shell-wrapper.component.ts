import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth/services/auth.service';
import { AddTodoDialogComponent } from '@features/todos/add-todo-dialog/add-todo-dialog.component';
import { UserSnippet } from '@models/users/user-snippet.model';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'extendable-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss'],
})
export class ShellWrapperComponent implements OnInit {
  protected currentUser$: Observable<UserSnippet> = this.store
    .select('user')
    .pipe(map((userState) => userState.signedIn as UserSnippet));

  // TODO remove
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  public ngOnInit(): void {
    this.drawer.open();
  }

  constructor(
    protected router: Router,
    protected authService: AuthService,
    private dialog: MatDialog,
    private store: Store<AppState>
  ) {}

  // TODO
  protected openAddTodoDialog() {
    this.dialog.open(AddTodoDialogComponent, {
      width: '400px',
      position: { top: '100px' },
      backdropClass: 'is-transparent',
      ariaLabel: 'Add Todo dialog',
    });
  }
}
