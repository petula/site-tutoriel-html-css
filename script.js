//$(document).ready(function () {
//    $('div').mouseenter(function () {
//        $(this).animate({
//            height: '+=10px'
//
//        });
//        $(this).change({
//            backgroundcolor: '#FFE000'
//        });
//    });
//    $('div').mouseleave(function () {
//        $(this).animate({
//            height: '-=10px'
//        });
//    });
//    $('div').click(function () {
//        $(this).toggle(1000);
//    });
//});

$(document).ready(function () {
    $('img').mouseenter(function () {
        $(this).velocity({
            height: '+=15px',
            width: '+=15px',
            borderWidth: '10px',
            borderRadius: '40px'
                //            borderBottomLeftRadius: '0px',
                //            borderTopRightRadius: '0px'

        });
    });
    $('img').mouseout(function () {
        $(this).velocity({
            height: '-=15px',
            width: '-=15px',
            borderWidth: '5px',
            borderRadius: '15px',
            borderBottomRightRadius: '0px',
            borderTopLeftRadius: '0px'
        });
        //        $(this).toggleClass('html2');
    });
});
