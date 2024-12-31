import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private router:Router){}
  redirectTo(menu:any){
    switch (menu) {
      case 'dashboard':
        this.router.navigate(['/dashboard'])
        break;
    
        case 'classes':
          this.router.navigate(['/classes'])
          break;

          case 'chat':
          this.router.navigate(['/chat'])
          break;

          case 'learningplan':
          this.router.navigate(['/learningplan'])
          break;

          case 'resources':
          this.router.navigate(['/resources'])
          break;

          case 'setting':
            this.router.navigate(['/setting'])
            break;
      default:
        break;
    }
  }
}
