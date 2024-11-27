import { Component } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  breadcrumbs: any[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
