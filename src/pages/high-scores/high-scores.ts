import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-high-scores',
  templateUrl: 'high-scores.html'
})

export class HighScoresPage {
  
  users: FirebaseListObservable<any>; //firebase data array

  //Constructor
  constructor(public navCtrl: NavController, public af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.users = af.database.list('/users');  //gets firebase data and puts it into the array
  }

  //Show options for each score
  showOptions(user) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Option',
      buttons: [
        {
          text: 'Delete Score',
          role: 'destructive',
          handler: () => {
            this.removeUser(user);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }//showOptions()

  //Remove user
  removeUser(user: string){
    this.users.remove(user);
  }//removeUser()

}//HighScoresPage
