/*$("li").on( "click", function() {
    $( "li" ).removeClass( "active" )
    $( this ).addClass( "active" );
    $("section").hide();
    $("#"+$( this ).text()).show();
});*/
$("#show_code").on("click", function() {
if ($("#code1").hasClass("hidden1")) {
    $("#code1.hidden1").show();
    $("#code1.hidden1").addClass("shown");
    $("#code1.hidden1").removeClass("hidden1");
}

else {
    $("#code1").hide();
    $("#code1").addClass("hidden1");
    $("#code1").removeClass("shown");
}
});

$("#show_code2").on("click", function() {
    if ($("#code2").hasClass("hidden2")) {
        $("#code2.hidden2").show();
        $("#code2.hidden2").addClass("shown2");
        $("#code2.hidden2").removeClass("hidden2");
    }

    else {
        $("#code2").hide();
        $("#code2").addClass("hidden2");
        $("#code2").removeClass("shown2");
    }
});

$("#show_code4").on("click", function() {
    if ($("#code4").hasClass("hidden2")) {
        $("#code4.hidden2").show();
        $("#code4.hidden2").addClass("shown4");
        $("#code4.hidden2").removeClass("hidden4");
    }

    else {
        $("#code4").hide();
        $("#code4").addClass("hidden4");
        $("#code4").removeClass("shown4");
    }
});



$('#sel1').change(function(){
    if(this.value == "static"){
        $('.oh_input').prop('readonly',true);
    } else{
        $('.oh_input').prop('readonly',false);
    }
}).change();

    function refreshPage(){
    window.location.reload();
} 



