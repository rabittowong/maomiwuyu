import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.scss']
})
export class TemplateHeaderComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  @HostListener('window:scroll', ['$event'])
  isHomeBackground(): boolean {
    return (this.router.url === '/') && (window.pageYOffset === 0);
  }

  onLogin(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/dashboard/']);
    } else {
      this.router.navigate(['/login/']);
    }
  }

  ngOnInit(): void {
  }
}
