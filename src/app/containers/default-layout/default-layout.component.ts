import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { AuthenticationService, MissionService } from '../../_services';
import { AppService } from '../../_services/shared.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'default-layout.component.html',
  styleUrls: ['default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  subscription:Subscription;
  mission:string;
  Titlee: any;
  constructor(private router: Router, private title: Title, private appService: AppService, private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService, private missionService:MissionService, @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['img']

    });

    const appTitle = this.title.getTitle();
    this.router

      .events.pipe(

        filter(event => event instanceof NavigationEnd),

        map(() => {

          const child = this.activatedRoute.firstChild;

          if (child.snapshot.data['title']) {

            return child.snapshot.data['title'];

          }
         
          return appTitle;

        })

      ).subscribe((ttl: string) => {
        this.Titlee = ttl;
        console.log(this.Titlee+ ' Titl');
        //this.title.setTitle(ttl);

      });
     
      this.subscription = missionService.missionAnnounced$.subscribe(
        mission => {
       
          this.mission = mission;
         // this.announced = true;
         // this.confirmed = false;
      });
  }

  ngOnInit() {
   
    // 
    
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    // window.location.href= '/consultant_admin/#/login';
  }
}
