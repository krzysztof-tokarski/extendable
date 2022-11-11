import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from '@core/api/api-endpoints';
import { environment } from '@environments/environment';
import { CreateUserDto } from '@models/users/create-user-dto.model';
import { FacadeToastrService } from '@shared/feedback/facade-toastr.service';

@Injectable({
  providedIn: 'root',
})
// TODO possibly move somewhere else
export class UsersService {
  constructor(private http: HttpClient, private toastr: FacadeToastrService) {}

  public createUser(createUserDto: CreateUserDto) {
    this.http
      .post(`${environment.API_URL}/${ApiEndpoints.BASE_USERS}`, createUserDto)
      .subscribe({
        next: () => {
          this.toastr.displaySuccessToast('Successfully signed up!');
        },
      });
  }

  // public checkIfUserExists(email: string) {
  //   this.http
  //     .post(`${environment.API_URL}/${ApiEndpoints.AUTH_LOGIN}`, authFormValue)
  //     .subscribe();
  // }
}
