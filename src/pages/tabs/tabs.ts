import { CommunityPage } from './../community/community';
import { SuggestionPage } from './../suggestion/suggestion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

   // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SuggestionPage;
  tab3Root: any = CommunityPage;
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider) {
    this.user = this.navParams.get('user')
    console.log(this.user)
    
  }

  ionViewDidLoad() {
 
  }
  

}
