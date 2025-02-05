import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {NgClass} from '@angular/common';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    NgClass
  ],
  templateUrl: './navbar.smart.component.html',
  styleUrl: './navbar.smart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarSmartComponent implements OnInit{

  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',

      },
    ];
  }
}
