import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[];
  constructor() {
    
    this.items = [
      {
        label: 'FINANCIAL SERVICE',
        icon: 'pi pi-fw pi-home',
        routerLink: '/incometax'
      },
      {
        label: 'TAX CALCULATOR',
        icon: 'pi pi-fw pi-percentage',
        routerLink: '/incometax'
      },
      {
        label: 'EMI CALCULATOR',
        icon: 'pi pi-fw pi-file',
        routerLink: '/incometax'
      },

      {
        label: 'TAX SLAB',
        icon: 'pi pi-fw pi-question-circle'
      },
      {
        label: 'ITR FILING GUIDE',
        icon: 'pi pi-fw pi-info-circle'
      },
      {
        label: 'ABOUT',
        icon: 'pi pi-fw pi-info-circle'
      },
      {
        label: 'CONTACT',
        icon: 'pi pi-fw pi-mobile'
      },

      {
        label: 'LOGIN',
        icon: 'pi pi-fw pi-sign-in'
      }
    ];
  }

  ngOnInit() {

  }

}
