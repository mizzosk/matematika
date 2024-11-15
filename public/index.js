var result = 0;
var counter = 0;
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
$(".vysledok").hide();


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
    counter++
    var resultNumber = parseInt($("#result").text(), 10);
    if(resultNumber === result){
        correctCounter++;

        if(counter === repeat){
            $("div").hide();
            $("#vysledok1").html(correctCounter);
            $("#vysledok2").html(incorrectCounter);
            $("#vysledok-container").show();
            $(".vysledok").show();
        }else{
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

        if(counter === repeat){
            $("div").hide();
            $("#vysledok1").html(correctCounter);
            $("#vysledok2").html(incorrectCounter);
            $("#vysledok-container").show();
            $(".vysledok").show();
        }else{
            $(".grid-container").css("backgroundColor", "rgb(210, 69, 69)")
            setTimeout(function() {
                $(".grid-container").css("backgroundColor", "rgb(180, 121, 130)");
                $("#result").text("");
            }, 300);
        }
        }
    console.log(counter);
});

