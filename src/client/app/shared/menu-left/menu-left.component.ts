import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// Services
import { StateMenu } from '../services/state';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-menu-left',
  templateUrl: 'menu-left.component.html'
})
export class MenuLeftComponent implements OnInit {

  contentData: boolean[];
  sizeMenu: boolean;
  hoverModule: boolean = false;
  stateIconMenu: boolean[] = [false, false, false, false, false, false, false];

  subscription: Subscription;
  constructor(private _stateService: StateMenu) { }
  ngOnInit() {
    this.subscription = this._stateService.navItem$
      .subscribe(
      data => {
        this.contentData = data;
        this.sizeMenu = this.contentData[0];
      },
      err => console.error(err),
      () => console.log('done'));
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  hoveritem(tipe: any, value: any) {
    this.hoverModule = value;
    // console.log("hoverModule: " + tipe + " - " + this.hoverModule);
    this._stateService.showHiddenOverlay(this.hoverModule);
  }
}

