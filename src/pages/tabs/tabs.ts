import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HighScoresPage } from '../high-scores/high-scores';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //This tells the tabs component which Pages
  //Should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = HighScoresPage;
  
  constructor() {

  }
}
