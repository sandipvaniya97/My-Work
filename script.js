
const calculate = () => {
    var chemistry = document.querySelector("#chemistry").value;
    var maths = document.querySelector("#maths").value;
    var phy = document.querySelector("#phy").value;
    var Eng = document.querySelector("#eng").value;
    var grades = "";
 
    var totalgrades =
       parseFloat(chemistry) + parseFloat(maths) + parseFloat(phy) + parseFloat(Eng);
 
    var percentage = (totalgrades / 400) * 100;
    if (percentage <= 100 && percentage >= 80) {
       grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
       grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
       grades = "C";
    } else {
       grades = "F";
    }
    
    if (chemistry == ""|| maths == "" || phy == "" || Eng == "") { document.querySelector("#showdata").innerHTML = "Please enter all Subject Obtained marks";
    } else {
       if (percentage >= 39.5) {
       document.querySelector(
          "#showdata"
       ).innerHTML =
          ` Out of 400 your total is ${totalgrades}
          and percentage is ${percentage}%. <br>
          Your grade is ${grades}. You are Pass. `;
       } else {
          document.querySelector(
             "#showdata"
       ).innerHTML =
          ` Out of 400 your total is ${totalgrades}   <br>
          and percentage is ${percentage}%. <br>
          Your grade is ${grades}. You are Fail. `;
       }
    }
 };