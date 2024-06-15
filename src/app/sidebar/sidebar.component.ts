// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.scss']
// })
// export class SidebarComponent {

// }

import { Component, OnInit } from '@angular/core';
import { IconDefinition, faTh, faBars, faUserAlt, faSync, faStar, faPlus, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isOpen: boolean = false;
  menuItem: { path: string, name: string, icon: IconDefinition }[] = [];
  faBars: IconDefinition = faBars;

  constructor() {
    this.menuItem = [
      { path: '/it', name: 'Dashboard', icon: faTh },
      { path: '/updateOrderStatus', name: 'Update Orders', icon: faSync },
      { path: '/vendor/:id', name: 'Vendor Details', icon: faUserAlt },
      { path: '/rating', name: 'Rating', icon: faStar },
      { path: '/addService', name: 'Add Services', icon: faPlus },
      { path: '/serviceDetails', name: 'Service Details', icon: faCogs },
      { path: '/logoutVendor', name: 'Log Out', icon: faSignOutAlt }
    ];
  }

  ngOnInit(): void {}

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}

