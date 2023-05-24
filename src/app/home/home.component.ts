import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  login_logout:boolean;

  constructor(private router: Router) {
  this.router.events.subscribe({
    next: (event) => {
     if(event instanceof NavigationEnd){
      if(event.url === "/login" || event.url === "/signup"){
         this.login_logout = true;
      }
      else{
        this.login_logout = false;
      }
     }
    }
  })
    
   }



logOut(){
  
}


}
