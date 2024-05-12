// 最初にJSのファイルが動くかalertでチェック
// alert (124567890)

var num1;
var mum2;
var blank;
var mix;
var sign;
var number;
var score;
var currentScore;
var newScore;

$("#equal").hide()
$("#numberInput").hide()
$("#tokuten").hide()
currentScore = 0

$("#start").on('click', function(){
    $("#numberInput").val('')
    $("#numberInput").show()
    $("#numberInput").focus()
    $("#hantei").hide()

    var mix = Math.floor(Math.random() * 2);
    var sign = Math.floor(Math.random() * 2);
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    console.log(mix)
    console.log(sign)
   

        if(mix == 0){
            if(sign == 0){
            // num1 + num2 = blank
            blank = num1 + num2
            $("#left").html(num1)
            $("#sign").html("+")
            $("#middle").html(num2)
            $("#right").html("□")
            $("#left").show()
            $("#middle").show()
            $("#equal").show()
            $("#right").show()

            }else{
            // num1 - num2 = blank
            blank = num1 - num2    
            $("#left").html(num1)
            $("#sign").html("-")
            $("#middle").html(num2)
            $("#right").html("□")
            $("#right").html("□")
            $("#left").show()
            $("#middle").show()
            $("#equal").show()
            $("#right").show()    
            }
        }
        if(mix == 1){
            if(sign == 0){
            // num1 + blank = num2
            blank = num2 - num1
            $("#left").html(num1)
            $("#sign").html("+")
            $("#middle").html("□")
            $("#right").html(num2)
            $("#left").show()
            $("#middle").show()
            $("#equal").show()
            $("#right").show()
            }else{
            // num1 - blank = num2
            blank = num1 - num2
            $("#left").html(num1)
            $("#sign").html("-")
            $("#middle").html("□")
            $("#right").html(num2)    
            $("#left").show()
            $("#middle").show()
            $("#equal").show()
            $("#right").show()
            }
        }
})
        // $(document).ready(function() {
            $('#numberInput').on('keypress', function(event) {
                if (event.which === 13) { // Enterキーのキーコードは13
                    number = $(this).val();
                    // $('#display').text(number);
                    event.preventDefault(); // フォームが送信されるのを防ぐ
                }
                
                    if(number == blank){
                        $("#hantei").html("正解")
                        $("#hantei").show()
                        
                                // 現在のスコアを取得し、整数に変換します
                                currentScore = parseInt($('#tokuten').text());
                                console.log(currentScore)
                                // スコアに100を加算します
                                newScore = currentScore + 100;
                                // 更新されたスコアを表示します
                                $('#tokuten').text(newScore);
                                $('#tokuten').show(newScore);
                    
                    }else {
                        $("#hantei").html("不正解")
                        $("#hantei").show()
                    }
            
            });
        // });
        
           
