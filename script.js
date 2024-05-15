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

var initialDuration = 20; // 1分 = 60秒
var duration;  //カウントダウン用の変数を初期化
var display = $('#timer');
var timer;


$("#equal").hide()
$("#numberInput").hide()
$("#tokuten").hide()
$("#timer").hide()

$("#start").on('click', function(){
    $("#audio_start").get(0).play()
    $("#timer").show()
    
    currentScore = 0;
    newScore = currentScore; // newScore を現在のスコアにリセット
    $('#tokuten').text(newScore); // スコアをリセット


    clearInterval(timer); // 既にタイマーが動作している場合は停止
        duration = initialDuration; // 時間をリセット
        display.text("01:00"); // 表示をリセット

        timer = setInterval(function() {
            var minutes = parseInt(duration / 60, 10);
            var seconds = parseInt(duration % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;   //10より小さい場合は先頭に0付ける
            seconds = seconds < 10 ? "0" + seconds : seconds;　 //10より小さい場合は先頭に0付ける
            //条件 ? 真の場合 : 偽の場合。　常に二けたを表示させるためのコード

            display.text(minutes + ":" + seconds);

            if (--duration < 0) {
                clearInterval(timer);
                
                $("#audio_end").get(0).play()
                $(".popup").addClass('view');
                console.log(newScore)
                $(".popup__body").html(newScore);
                $(".popup__body2").show() 
                $(".close").on('click',function(){
                    $(".popup").removeClass('view');
                  });

                // display.text("時間です！");
                timer = null; // タイマーをリセット
            }
        }, 1000)
   
    $("#tokuten").hide()
    $("#numberInput").val('')
    $("#numberInput").show()
    $("#numberInput").focus()
    $("#hantei").hide()
    

    var mix = Math.floor(Math.random() * 2);
    var sign = Math.floor(Math.random() * 2);
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);   

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
                // }
                
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
                                $('#audio_seikai').get(0).play()

                                $("#hantei").delay(1000).queue(function(next){
                                    $(this).hide();
                                    next();
                                    })


                                // 繰り返し
                                $("#numberInput").val('')
                                $("#numberInput").show()
                                $("#numberInput").focus()
                            
                                var mix = Math.floor(Math.random() * 2);
                                var sign = Math.floor(Math.random() * 2);
                                var num1 = Math.floor(Math.random() * 100);
                                var num2 = Math.floor(Math.random() * 100);
                               
                            
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
                    
                    }else {
                        $('#audio_fuseikai').get(0).play()
                        $("#hantei").html("不正解")
                        $("#hantei").show()
                        $("#hantei").delay(1000).queue(function(next){
                            $(this).hide();
                            next();
                            })
                    }
                }
            });
        // });
        
           
