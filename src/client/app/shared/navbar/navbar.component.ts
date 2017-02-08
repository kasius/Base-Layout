import { Component } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';


// Services
import { StateMenu } from '../services/state';

// import { MenuLeftComponent } from '../menu-left/menu-left.component';

/**
 * This class represents the navigation NavbarComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent {

  stateMenu: StateMenu
  sizeMenu: boolean = false;

  constructor(private _stateMenu: StateMenu) {

  }

  toggleMenu() {
    this._stateMenu.changeNav(this.sizeMenu, !this.sizeMenu);
    if(this.sizeMenu == true){
      this.sizeMenu = false;
    }else if(this.sizeMenu == false){
      this.sizeMenu = true;
    }
  }
}
