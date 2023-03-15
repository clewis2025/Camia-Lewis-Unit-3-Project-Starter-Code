/* Declare variables below to save the different sections (divs) of your story*/

let optionButtonOne = document.querySelector(".option-one");
let optionButtonTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");

optionButtonOne.onclick = function() {
   optionOneScreen.style.display = "block";

    
};

optionButtonTwo.onclick = function() {
   optionTwoScreen.style.display = "block";
};
optionOneScreen.onclick = function() {
   optionOneEnd.style.display = "block";
};
optionTwoScreen.onclick = function() {
   optionTwoEnd.style.display = "block";
};






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!


};
};


};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

}; 

*/


