$(document).ready(function () {
    $("#next").hide();
    var Questioninvalid = new Array(); 
    var cont = 0;
    $('#send').click(function () {
        var answers = [$('#question1').val(), $('#question2').val(), $('#question3').val(), $('#question4').val(), $('#question5').val(), $('#question6').val(), $('#question7').val(), $('#question8').val(), $('#question9').val(), $('#question10').val(), $('#question11').val(), $('#question12').val(), $('#question13').val(), $('#question14').val(), $('#question15').val(), $('#question16').val(), $('#question17').val()]
        var openAnswers = [$('#openQuestion4').val(), $('#openQuestion5').val(), $('#openQuestion9').val(), $('#openQuestion11').val(), $('#openQuestion12').val()]

        for (var i = 0; i < answers.length; i++) {
            if (answers[i] == 0) {
                Questioninvalid[cont] = i+1;
                cont = cont + 1;
            }
        }
        cont = 0;
        if (Questioninvalid.length > 0) {
            viewAlert(Questioninvalid);
            Questioninvalid = [];
        } else {
            sendanswers(answers, openAnswers);
        }
    });
});

function viewAlert(Questioninvalid) {
    var text = new String();
    for (var i = 0; i < Questioninvalid.length; i++) {
        var temp = Questioninvalid[i];
        if (i == 0) {
            text = text + temp;
        } else {
            text = text + ', ' + temp;
        }
    }
    Swal.fire({
        title: "Oh! Te faltan responder las preguntas: ",
        text: text,
        width: '50%',
        padding: '1rem'
    });
    text = " ";
}

function sendanswers(answers, openAnswers) {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/QuestionsCBQ/ValidateAnswersCBQ',
        data: { answers: answers, openAnswers: openAnswers }
    }).done(function (json) {
        if (json.result) {
            Swal.fire({
                title: "¡Cuestionario completado!",
                width: '50%',
                padding: '1rem'
            });
            $("#next").show();
            $("#send").attr("disabled", true);
            $("#question1").attr("disabled", true);
            $("#question2").attr("disabled", true);
            $("#question3").attr("disabled", true);
            $("#question4").attr("disabled", true);
            $("#question5").attr("disabled", true);
            $("#question6").attr("disabled", true);
            $("#question7").attr("disabled", true);
            $("#question8").attr("disabled", true);
            $("#question9").attr("disabled", true);
            $("#question10").attr("disabled", true);
            $("#question11").attr("disabled", true);
            $("#question12").attr("disabled", true);
            $("#question13").attr("disabled", true);
            $("#question14").attr("disabled", true);
            $("#question15").attr("disabled", true);
            $("#question16").attr("disabled", true);
            $("#question17").attr("disabled", true);
            $("#openQuestion4").attr("disabled", true);
            $("#openQuestion5").attr("disabled", true);
            $("#openQuestion9").attr("disabled", true);
            $("#openQuestion11").attr("disabled", true);
            $("#openQuestion12").attr("disabled", true);
        }
    });
}