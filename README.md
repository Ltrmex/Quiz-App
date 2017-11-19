## App Makes Use of:
	-> Firebase
	-> Camera plugin
	-> Provider for question data
	-> Mapping the data with json files
	-> Angular 2 two way data binding
	-> Angular 2, such as *ngFor, *ngIf
	-> Answer card component
	-> Alert sheet
	-> Ion slides
	-> Tabs
	-> Geolocation

## App Allows User To:
	-> Input their name and age
	-> Take a photo
	-> Select from variety of quizes
	-> Choose from four different options for each question, needs to answer within 30 seconds
	-> Upload their name, age, score, type of quiz, location and photo to firebase, later this data will be displayed in HighScore tab

## App's Additional Information:
	-> Requires Internet connection to avail use of firebase
	-> If user doesn't choose a quiz, then default one will be chosen
	-> Default quiz has questions from other type of quizes
	-> Uncaught exception: undefined might show up after installing plugins, it causes no issues what so ever with the app so don't worry about it
	-> After last update of Ionic View, camera plugin/firebase sometimes don't work, might require few times of loading the app
  
## HOW TO RUN IT:
	-> Press "windows key + x", select "search", and then type "cmd" and press enter, there input following commands: 
  	- Desktop
  	- git clone https://github.com/danielcregggmit/2nd-year-software-ionic-2-assignment-Ltrmex.git
  	- cd 2nd-year-software-ionic-2-assignment-Ltrmex
   	- npm install
   	- mkdir www
   	- ionic state restore
  	- ionic serve
