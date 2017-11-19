import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AnswerCardComponent } from '../components/answer-card/answer-card';
import { QuestionData } from '../providers/question-data';
import { HighScoresPage } from '../pages/high-scores/high-scores';
import { TabsPage } from '../pages/tabs/tabs';
 
//Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
//AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyBTxMDQKIJ__-uJrSnTqzVwekoYPrhtEM8",
    authDomain: "g00332746.firebaseapp.com",
    databaseURL: "https://g00332746.firebaseio.com",
    storageBucket: "g00332746.appspot.com",
    messagingSenderId: "1037946326933"
};
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HighScoresPage,
    TabsPage,
    AnswerCardComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HighScoresPage,
    TabsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, QuestionData]
})
export class AppModule {}