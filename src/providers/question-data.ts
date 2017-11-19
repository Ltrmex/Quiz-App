import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class QuestionData {
 
    data: any;
 
    constructor(public http: Http) {
 
    }
    //Handles loading in the data 
    load(option){
        let template: string;
        //If data already has been loaded, resolve with the data
        if(this.data){
            return Promise.resolve(this.data);
        }
        
        //If data not loaded, we get loaded it from questions.json file
        return new Promise(resolve => {

            if(option == "HTML")
                template = "assets/data/HTML.json";
            else if(option == "CSS")
                template = "assets/data/CSS.json";
            else if(option == "JavaScript")
                template = "assets/data/JavaScript.json";
            else if(option == "TypeScript")
                template = "assets/data/TypeScript.json";
            else if(option == "Ionic 2")
                template = "assets/data/Ionic 2.json";
            else if(option == "Java")
                template = "assets/data/Java.json";
            else if(option == "C")
                template = "assets/data/C.json";
            else
                template = "assets/data/questions.json";



            //Convert JSON response into an object using map operator
            this.http.get(template).map(res => res.json()).subscribe(data => {
                this.data = data.questions;
                resolve(this.data);
            });
 
        });
 
    }
 
}