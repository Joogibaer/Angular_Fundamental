import { Component } from '@angular/core'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
//  styleUrls: ['./navbar.component.css'],
  styles:[`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px}
    @media (max-width: 1200px) {#searchForm {display:none}}
    .navbar-nav > li > a.active { color: #f97924;}
    li > a.active { color: #F97924; }


    `]
})
export class NavBarComponent{

}
