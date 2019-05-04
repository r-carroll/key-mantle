import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  @ViewChild('mainNav') mainNav: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @HostListener('window:scroll', [])
  onScroll(event) {
    if ((window.pageYOffset > 200 && this.mainNav && this.mainNav.nativeElement.classList) 
        || window.location.pathname.includes('maintenance')) {
      this.mainNav.nativeElement.classList.add('navbar-shrink');
    } else if (this.mainNav && this.mainNav.nativeElement.classList) {
      this.mainNav.nativeElement.classList.remove('navbar-shrink');
    }
  }

}
