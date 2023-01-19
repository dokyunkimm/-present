//팝업 열고 닫기
$(document).ready(function() {
    $(".suppt_btn").on("click", function(){
        $(".pop_wr").show();
    });
    $("#popUpClose, .black_bg").on("click", function(){
        $(".pop_wr").hide();
    });


    
    // 폭죽 효과
    // $('.btnFirecracker').on('click',function(e){
    //     e.preventDefault();
    //     const targetLink = $(this).attr('href');
    //     // console.log(targetLink);
        
    //     setTimeout(function() {
    //         window.location.href = targetLink;
            
    //     }, 2000);
    // });

    // 꽃가루 효과
    function reAction() {
        $("#startButton").trigger("click");
        setTimeout(function(){
            $("#stopButton").trigger("click");
        }, 6000);
    }
    reAction();

    // 편지봉투 흔들리는 효과
    setTimeout(function() {
        $('.text_fadeIn').addClass('active');
    }, 1000)
    setTimeout(function() {
        $('.text_fadeIn').removeClass('active');
    }, 2500);

    setTimeout(function() {
        $('.orginal_fadeIn').addClass('active');
    }, 4000);

    // 편지봉투 클릭 효과
    function boxOpn(){
        setTimeout(function() {
            $('.box-body').addClass('on');
        }, 1500);
    }
    function letterClick(){
        setTimeout(function() {
            $('.box-body.btnFirecracker').trigger('click');
        }, 2000);
    }
    letterClick();
    boxOpn();

    
    
});












