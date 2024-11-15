var result = 0;
var correctCounter = 0;
var incorrectCounter = 0;

console.log(correctCounter)
console.log(incorrectCounter)
// Get the selection from localStorage
const odDo = localStorage.getItem('OdDo');
const sign = localStorage.getItem('sign');
const repeat = Number(localStorage.getItem('repeat'));

console.log(odDo);
console.log(sign);
console.log(repeat);

function minusExcerciseGenerator(){
    var randomNumberHigher = Math.floor(Math.random() * odDo);
    var randomNumberLower = Math.floor(Math.random() * randomNumberHigher);
    result = randomNumberHigher-randomNumberLower;
    $("#higherNumber").text(randomNumberHigher);
    $("#lowerNumber").text(randomNumberLower);
    $("#sign").text("-");
    }

function plusExcerciseGenerator(){
    var randomNumberHigher = Math.floor(Math.random() * odDo);
    var randomNumberLower = Math.floor(Math.random() * (odDo-randomNumberHigher));
    result = randomNumberHigher+randomNumberLower;
    $("#higherNumber").text(randomNumberHigher);
    $("#lowerNumber").text(randomNumberLower);
    $("#sign").text("+");
    }

function ExcerciseGenerator(){  
var switch1 = Math.floor(Math.random() * 2);
if(switch1 === 0){    
    minusExcerciseGenerator()
}else{
    plusExcerciseGenerator()
};  
}

//populate excercise upon webpage load
if (sign === 'plus_minus') {
    ExcerciseGenerator();
} else if (sign === 'plus') {
    plusExcerciseGenerator();
} else {
    minusExcerciseGenerator();
}



//hide h2 game reuslts
$("h2").hide();
$("#new-game").hide();


//calculator button
$(".calculator-number").on("click",function(){
    var answer = $("#result").text();
    var number = $(this).text();
    if($("#result").text().length<3){
        $("#result").text(number + answer);
    }else{
        $("#result").text(number);
    }   
    $(this).fadeToggle(100).fadeToggle(100);
});

//empty result
$("#delete").on("click",function(){
    $("#result").text("");
    $(this).fadeToggle(100).fadeToggle(100);
});

//verify results
$("#ok").on("click",function(){
    var resultNumber = parseInt($("#result").text(), 10);
    if(resultNumber === result){
        correctCounter++;
        if(correctCounter === repeat){
            $("div").hide();
            $("h2").html("GRATULUJEM!!! <BR> <BR>" + correctCounter + " PRÍKLADOV SPRÁVNE VYRIEŠENÝCH <BR><BR> POČET CHÝB: " + incorrectCounter);
            $("h2").show();
            $("#new-game").show();
        ;}else{
            console.log(correctCounter);
            $(".grid-container").css("backgroundColor", "rgb(165, 221, 155)")
            setTimeout(function() {
                $(".grid-container").css("backgroundColor", "rgb(180, 121, 130)");
                $("#result").text("");
                if (sign === 'plus_minus') {
                    ExcerciseGenerator();
                } else if (sign === 'plus') {
                    plusExcerciseGenerator();
                } else {
                    minusExcerciseGenerator();
                }
            }, 300);}
        $(this).fadeToggle(100).fadeToggle(100);
    }else{
        incorrectCounter++;
        $(".grid-container").css("backgroundColor", "rgb(210, 69, 69)")
        setTimeout(function() {
            $(".grid-container").css("backgroundColor", "rgb(180, 121, 130)");
            $("#result").text("");
        }, 300);
    }
});

// Reload the webpage when a button with the id "reloadButton" is clicked
$("#new-game").on("click", function() {
    window.location.href = '../index.html'; // Redirect to subpage
});
