var result = 0;
var correctCounter = 0;
var incorrectCounter = 0;

function minusExcerciseGenerator(){
    var randomNumberHigher = Math.floor(Math.random() * 99);
    var randomNumberLower = Math.floor(Math.random() * randomNumberHigher);
    result = randomNumberHigher-randomNumberLower;
    $("#higherNumber").text(randomNumberHigher);
    $("#lowerNumber").text(randomNumberLower);
    $("#sign").text("-");
    }

function plusExcerciseGenerator(){
    var randomNumberHigher = Math.floor(Math.random() * 99);
    var randomNumberLower = Math.floor(Math.random() * (99-randomNumberHigher));
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
ExcerciseGenerator();

//hide h2 game reuslts
$("h2").hide();
$("#new-game").hide();


//calculator button
$(".calculator-number").on("click",function(){
    var answer = $("#result").text();
    var number = $(this).text();
    $(this).fadeToggle(100).fadeToggle(100);
    if($("#result").text().length<2){
        $("#result").text(number + answer);
    }else{
        $("#result").text(number);
    }   
});

//empty result
$("#delete").on("click",function(){
    $(this).fadeToggle(100).fadeToggle(100);
    $("#result").text("");
});

//verify results
$("#ok").on("click",function(){
    var resultNumber = parseInt($("#result").text(), 10);
    $(this).fadeToggle(100).fadeToggle(100);
    if(resultNumber === result){
        correctCounter++;
        if(correctCounter ===10){
            console.log("allgood");
            $("div").hide();
            $("h2").html("GRATULUJEM!!! <BR> <BR> 10 PRÍKLADOV SPRÁVNE VYRIEŠENÝCH <BR><BR> POČET CHÝB: " + incorrectCounter);
            $("h2").show();
            $("#new-game").show();
        ;}else{
            console.log(correctCounter);
            $(".grid-container").css("backgroundColor", "rgb(165, 221, 155)")
            setTimeout(function() {
                $(".grid-container").css("backgroundColor", "rgb(180, 121, 130)");
                $("#result").text("");
                ExcerciseGenerator();
            }, 300);}
    }else{
        incorrectCounter++;
        console.log(incorrectCounter);
        $(".grid-container").css("backgroundColor", "red")
        setTimeout(function() {
            $(".grid-container").css("backgroundColor", "rgb(180, 121, 130)");
            $("#result").text("");
        }, 300);
    }
});

// Reload the webpage when a button with the id "reloadButton" is clicked
$("#new-game").on("click", function() {
    location.reload();
});

