import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'extendable-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss'],
})
export class ShellWrapperComponent implements OnInit {
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

  constructor(protected router: Router) {}

  public ngOnInit(): void {
    this.drawer.open();
    console.log('XD');
  }
}
