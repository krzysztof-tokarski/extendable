import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class FacadeToastrService {
  constructor(private toastrService: ToastrService) {}

  // TODO proper implementation
  public displayHttpErrorToast(response: HttpErrorResponse) {
    this.toastrService.error(response.statusText, `Error ${response.status}`);
  }

  public displayErrorToast(message: string, title: string = 'Failure') {
    this.toastrService.error(message, title);
  }

  public displaySuccessToast(message: string, title: string = 'Success') {
    this.toastrService.success(message, title);
  }
}
