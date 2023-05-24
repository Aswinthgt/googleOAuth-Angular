import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  private authService = inject(AuthService)

  googleSignup(){
    this.authService.googleAuth();
  }


}
