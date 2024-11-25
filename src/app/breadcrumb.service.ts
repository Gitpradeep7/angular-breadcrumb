import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<any[]>([]);
  public breadcrumbs$ = this.breadcrumbsSubject.asObservable();


  constructor(private router:Router) {
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd),
    map(()=> this.buildBreadcrumbs(this.router.routerState.snapshot.root))
  )
  .subscribe((breadcrumbs)=>{
    this.breadcrumbsSubject.next(breadcrumbs);
  });
  console.log('21 router',router)
  console.log('22 routerevent',router.events)
   }

   private buildBreadcrumbs(route:ActivatedRouteSnapshot | null,path: string='',breadcrumbs:any[]=[] ):any{
    console.log('26 route',route)
    if(route){
      const routeUrl = route.url.map((segment)=>segment.path).join('/');
      const nextPath = routeUrl ? `${path}/${routeUrl}`:path;
      console.log('30 routeUrl',routeUrl);
      console.log('31 nextPath',nextPath);
      console.log('32 route.data[breadcrumb]',route.data['breadcrumb'])
      if(route.data['breadcrumb']){
        breadcrumbs.push({label:route.data['breadcrumb'], url:nextPath});
      }
      console.log('36 route.firstChild',route.firstChild);
      console.log('-----------------------------------------------------')
      return this.buildBreadcrumbs(route.firstChild, nextPath, breadcrumbs)
    }
    return breadcrumbs;
   }
}
