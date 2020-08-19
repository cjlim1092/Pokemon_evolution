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

  //declare database
  var defaultDatabase = firebase.database();
  var path = firebase.database().ref("child/path") //specifies a specific location in the database tree
 


//write data on engage
  function writeData(){ 
    var name= document.getElementById("Name").value
    firebase.database().ref(`Students/${name}`).set({
        pretest: evolutionPretest(),
        explain1: document.getElementById("explain1").value
    })
    .then(function(){
        alert('Submitted!');
    });
  }


 // firebase.database().ref(`Students/${name}`); //call the path
 // firebase.database().set(); //execute the path

  //write metamorphosis data
  function writeMetamorphosisData(){ 
    var name= document.getElementById("Name").value
    
    firebase.database().ref(`Students/${name}`).update({
       questions1: document.getElementById("questions1").value,
       metamorphosis: metamorphosisCheck(),
       metamorphosis2: metamorphosisCheck2()
    })
    .then(function(){
        alert('Submitted!');
    });
  }

//writeFamilyData
function writeFamilyData(){ 
    var name= document.getElementById("Name").value
    
    firebase.database().ref(`Students/${name}`).update({
       childrenlooklikeparents: parentsYN(),
       explain2: document.getElementById("explain2").value,
       explain3: document.getElementById("explain3").value
    })
    .then(function(){
        alert('Submitted!');
    });
  }

  //writeHistoryData()
  function writeHistoryData(){ 
    var name= document.getElementById("Name").value
    
    firebase.database().ref(`Students/${name}`).update({
       time1: document.getElementById("time1").value,
       time2: document.getElementById("time2").value
    })
    .then(function(){
        alert('Submitted!');
    });
  }

  //writeAlolaData
  function writeAlolaData(){ 
    var name= document.getElementById("Name").value
    
    firebase.database().ref(`Students/${name}`).update({
        explain4: document.getElementById("explain4").value,
        explain5: document.getElementById("explain5").value,
        naturalSelection: naturalSelectionCheck(),
        naturalSelection2: naturalSelectionCheck2(),
        explain6: document.getElementById("explain6").value
    })
    .then(function(){
        alert('Submitted!');
    });
  }

  //writeQuizData();
  function writeQuizData(){ 
    var name= document.getElementById("Name").value
    
    firebase.database().ref(`Students/${name}`).update({
        explain7: document.getElementById("explain7").value,
        postTest: evolutionPosttest(),
        results: howMany()
    })
    .then(function(){
        alert('Submitted!');
    });
  }

//radio button variables
  function evolutionPosttest() { 
   if (document.getElementById("evolution").checked === true){
       return "B";
   } else{
       return "A";
   }}

   function evolutionPosttest() { 
    if (document.getElementById("Bright").checked === true){
        return "B";
    } else{
        return "A";
    }}

 // Check Answer on metamorphosis and give feedback
  function check(){
      if (document.getElementById("metamorphosis").checked){
        alert("Correct! There is one individual with 3 life stages.");
      }
      else if (document.getElementById('evolution').checked){
        alert("Try again. Think about how many individuals there are and how many life stages each individual has.");  
      }

    }

  function check2(){
       if (document.getElementById('evolution2').checked){
        alert("Try again. Think about how many individuals there are and how many life stages each individual has.");  
      }
      else if (document.getElementById('metamorphosis2').checked){
        alert("Correct! There is one individual with 3 life stages.");  
      }
    }

    function metamorphosisCheck(){
         if (document.getElementById("evolution").checked === false){
            return "The student understands metamorphosis";
         } 
         else{
          return "The student thinks metamorphosis is evolution";
            }}
    
    function metamorphosisCheck2(){
        if (document.getElementById("evolution2").checked === false){
            return "The student understands metamorphosis";
        } else{
            return "The student thinks metamorphosis is evolution";}};

//collect answers for family
function checkMom(){
  if (document.getElementById("traitsA1").checked){
    alert("Correct! The cheek color is inherited from the Mom.");
  } else{
    alert("Try again, take a look at the color and shape of each trait in the parents and child.");
  }
}
function checkDad(){
  if (document.getElementById("traitsD2").checked){
    alert("Correct! The tail shape and ear color are inherited from the Dad.");
  } else{
    alert("Try again, take a look at the color and shape of each trait in the parents and child.");
  }
}

function parentsYN(){
  if (document.getElementById("yesparents").checked){
    return("do");
  } else {
    return ("don't");
  }
}

//natural selection check
function naturalSelectionCheck(){
    if (document.getElementById("NatSelY").checked === true){
        return "The student chose natural selection";
    } else{
        return "The student didn't choose natural selection";
    };
};
function naturalSelectionCheck2(){
    if (document.getElementById("NatSelY2").checked === true){
        return "The student chose natural selection";
    } else{
        return "The student chose random chance";
    };
};
function checkNS(){
  if (document.getElementById("NatSelY").checked === true){
    alert("Correct! The traits help them survive in their environment.")
} else{
    alert("Try again. Natural selection helps species survive in their environments.");
}; 
}
function checkNS2(){
  if (document.getElementById("NatSelN2").checked === true){
    alert("Try again. Think about why they have hair but the original ones do not.)")
} else{
    alert("Correct! The hair helps protect them from the environment. It also looks good ;)");
}; 
}

//hint button
function hint(){
    document.getElementById("displayHint").innerHTML = "Evolution happens to a species over time."
}

//checkQuiz
function howMany(){
  let numberCorrect = 0;
  let Q1 = document.getElementById("individualT").checked;
  let Q2 = document.getElementById("someT").checked;
  let Q3 = document.getElementById("F3").checked;
  let Q4 = document.getElementById("speciesT").checked;
  var answerArray =[Q1, Q2, Q3, Q3];
console.log('Array ' + answerArray)
  for (let i=0; i < answerArray.length; i++){
    if (answerArray[i]=== true){
      numberCorrect ++;
    } 

  }
  return numberCorrect;
}

function checkQuiz(){
  alert('You got '+ howMany()+ ' out of 4 correct!');
}

//read firbase 
function readFB() {
  var user = document.getElementById("Name").value;

  firebase.database().ref('Students/'+ user).once('value').then(function(snapshot){

    var pretest3 = snapshot.val().pretest;
    var explain13 = snapshot.val().explain1;
    var childrenlooklikeparents3 = snapshot.val().childrenlooklikeparents;
    var explain23 = snapshot.val().explain2;
    var explain33 = snapshot.val().explain3;
    var time13 = snapshot.val().time1;
    var time23 = snapshot.val().time2;
    var explain53 = snapshot.val().explain5;

    document.getElementById("pretest3").innerHTML = pretest3;
    document.getElementById("explain13").innerHTML = explain13;
    document.getElementById("childrenlooklikeparents3").innerHTML = childrenlooklikeparents3;
    document.getElementById("explain23").innerHTML = explain23;
    document.getElementById("explain33").innerHTML = explain33;
    document.getElementById("time13").innerHTML = time13;
    document.getElementById("time23").innerHTML = time23;
    document.getElementById("explain53").innerHTML = explain53;

  })
}
