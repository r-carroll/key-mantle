import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'K&M';
  @ViewChild('mainNav') mainNav: ElementRef;

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onScroll(event) {
    if (window.pageYOffset > 200 && this.mainNav && this.mainNav.nativeElement.classList) {
      this.mainNav.nativeElement.classList.add('navbar-shrink');
    } else if (this.mainNav && this.mainNav.nativeElement.classList) {
      this.mainNav.nativeElement.classList.remove('navbar-shrink');
    }
  }
}
