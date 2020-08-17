  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBVZQNgRaZ3FWfxTfi6XD4vTKbE7R_bKvQ",
    authDomain: "pokemon-evolution-39d04.firebaseapp.com",
    databaseURL: "https://pokemon-evolution-39d04.firebaseio.com",
    projectId: "pokemon-evolution-39d04",
    storageBucket: "pokemon-evolution-39d04.appspot.com",
    messagingSenderId: "435428899063",
    appId: "1:435428899063:web:50716c1c6addeaab5afbf2",
    measurementId: "G-8QPSJRG0KE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var database = firebase.database()
var root = firebase.database().ref(); //specifies the database root
var path= firebase.database().ref("child/path") //specifies a specific location

// begin array
let allLearners = [ {
  "name": "SpongeBob",
  "butterfly" : "metamorphosis",
  "caterpee" : "metamorphosis"
},
{
  "name":"Patrick",
  "butterfly" : "evolution",
  "caterpee" : "metamorphosis"
}
  
];

/*const addLearners = (ev) =>{
    ev.preventDefault(); //stops the form from submitting
    // fills the form on the database
    let learner = {
      name: document.getElementById('name').value,
      butterfly: document.getElementById('butterfly').value,
      caterpee:  document.getElementById('caterpee').value
    }

    learners.push(learner);
    

    //check on the console
    console.log ({learners});
  }*/

  //save to database
  root.set (learners);

  //set the root location
  firebase.database().ref('person/personData');

  //update operation
  firebase.database().set(allLearners);

  let fc = firebase.database().ref('person/newData');

//store JSON results
  let jsonString;

  //tell firebase to retrieve data
  fc.on("value". function(retrieve) {
    let queryData = retrieve.val();
    jsonString = JSON.stringify(queryData);
  });

console.log('JSON String: '+ jsonString)
//add responses
 /* document.addEventListener('ContentLoaded', ()=>{
    document.getElementById('submit2A').addEventListener('click', addLearners);
  //}); */

  console.log(allLearners);
/*
name
preA
preB
explain1
butterfly
caterpee
questions1
traitsA1
traitsB1
traitsC1
traitsD1
traitsA2
traitsB2
traitsC2
traitsD2
traitsA3
traitsB3
traitsC3
traitsD3
traitsA4
traitsB4
traitsC4
traitsD4
explain2
explain3
time1
time2
explain4
explain5
explain6
NatSelY
NatSelN
NatSelY2
NatSelN2
*/