import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/service/sidebar.service';
import { NavigationEnd, Router,  } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private sidebarService: SidebarService,private router: Router) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  displayedText: string = 'المواد الدراسيه';


  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd|any) => {
        if (event.url.includes('/students/subjects')) {
          this.displayedText = 'المواد الدراسيه';
        } else if (event.url.includes('/students/all-exercises')) {
          this.displayedText = 'كل التمارين';
        } else {
          this.displayedText = 'المواد الدراسيه';
        }
      });
  }
}
