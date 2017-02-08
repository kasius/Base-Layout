import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StateMenu {
  // Observable State menu Left
  private _navItemSource = new BehaviorSubject<boolean[]>([true,false]);
  navItem$ = this._navItemSource.asObservable();
  changeNav(number:any,sizeSection:any) {
    this._navItemSource.next([number,sizeSection]);
  }

  // Observable Show or Hide overlay in Section Primary
  private _overlaySection = new BehaviorSubject<boolean>(false);
  overlay$ = this._overlaySection.asObservable();
  showHiddenOverlay(value:any) {
    this._overlaySection.next(value);
  }
}