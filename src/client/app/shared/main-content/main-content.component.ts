import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// Services
import { StateMenu } from '../services/state';

/**
 * This class represents the navigation MainContentComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-main-content',
  templateUrl: 'main-content.component.html'
})
export class MainContentComponent implements OnInit {
  sizeSection: boolean;
  contentData: boolean[];
  overlay: boolean = false;

  subscription: Subscription;
  constructor(private _navService: StateMenu) { }
  ngOnInit() {
    this.subscription = this._navService.navItem$
      .subscribe(
      data => { 
        this.contentData = data; 
        this.sizeSection =  this.contentData[1];
      },
      err => console.error(err),
      () => console.log('done'))

      this.subscription = this._navService.overlay$
      .subscribe(
      data => { 
        this.overlay = data; 
      },
      err => console.error(err),
      () => console.log('done'))
  }
  
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
 }
