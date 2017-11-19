import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionData } from '../../providers/question-data';
import { Camera } from 'ionic-native';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Geolocation} from 'ionic-native';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 
    @ViewChild('slides') slides: any; //reference to control navigation between slides
 
    hasAnswered: boolean = false; //allow only one guess
    score: number = 0;  //keep track of the score
 
    slideOptions: any;
    questions: any; //reference to the questions

    base64Image: string;    //stores user's photo

    users: FirebaseListObservable<any>; //array for user's information

    timeLeft: number = 30;  //time to answer each question

    latitude: number;
    longitude: number;

    //Constructor
    constructor(public navCtrl: NavController, public dataService: QuestionData, public af: AngularFire) {
        this.base64Image = "assets/images/highscore.jpg";   //default picture/placeholder
        this.users = af.database.list('/users');    //determines database
        this.slideOptions = { onlyExternal: true };//prevent the user from navigating between slides
        setInterval(() => { 
            if(this.timeLeft != 0) {
                this.timeLeft -=  1;
            }
            else {
                this.nextSlide();
            }
        }, 1000);
    }//constructor
    
    //Determines which quiz user takes
    changeQuiz(option) {
        //Passes user option and loads choosen quiz
        this.dataService.load(option).then((data) => {
          
            //Map allows us to change the values of the array
            data.map((question) => {
 
                let originalOrder = question.answers;
                question.answers = this.randomizeAnswers(originalOrder);    //randomize answer options
                return question;    //return questions
 
            });     
 
            this.questions = data;  //set the questions to be equal to data that was mapped
 
        });
 
    }//changeQuiz
    
    //Moves onto the next slide
    nextSlide(){
        this.timeLeft = 30; //have to reset the time on next slide
        this.slides.slideNext();
    }//nextSlide()
    
    //Switch the value of answerCardFlipped
    selectAnswer(answer, question){

        this.hasAnswered = true;   //disable further input
        answer.selected = true; //marks selected answer
        question.answerCardFlipped = true; //reveals the answer
        
        //If answered correctly increment score
        if(answer.correct){
            this.score++;
        }
        
        //Wait 3 sec and reset values to move to next question
        setTimeout(() => {
            this.hasAnswered = false;
            this.nextSlide();
        }, 3000);
    }//selectAnswer()
    
    //Shuffle array
    randomizeAnswers(shuffle: any[]): any[] {
        
        //Loops through whole array and changes the order
        for (let i = shuffle.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));   
            let temp = shuffle[i];
            shuffle[i] = shuffle[j];  
            shuffle[j] = temp;
        }//for
        
        //Return shuffled array
        return shuffle;
 
    }//randomizeAnswers
    
    //Allows to take a picture
    takePicture(){
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 150,
            targetHeight: 150,
            encodingType: Camera.EncodingType.JPEG,
            correctOrientation: true,
        }).then((imageData) => {
        //Image data is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
    }//takePicture()

    //Start the quiz again
    restartQuiz(){
        window.location.reload();
    }//restartQuiz()
    
    //Pass data to firebase 
    addUser(username, age, quiz, score) {
        this.users.push({
        username: username,
        age: age,
        quiz: quiz,
        picture: this.base64Image,
        score: score,
        latitude: this.latitude,
        longitude: this.longitude
        }); 
    }//addUser()
    
    //Get user location
    getLocation() {
        Geolocation.getCurrentPosition().then(pos => {
            this.latitude = pos.coords.latitude;
            this.longitude = pos.coords.longitude;
        });
    }//getLocation()
}//HomePage