$(document).ready(function () {

    $('#priceList1').show();
    $('#priceList2, #priceList3,#priceList4, #priceList5').hide();
    $('.memberBtn1').removeClass('btn-primary');
    $('.faq3 h4').addClass('lightBlue');
    $('.faq3 span').html('－');
    $('#ans3').show();

    $('.memberBtn1').click(function (e) { 
        $('.memberBtn1').toggleClass('btn-primary');
        $('.memberBtn2, .memberBtn3, .memberBtn4, .memberBtn5').addClass('btn-primary');
        $('#priceList1').show();
        $('#priceList2, #priceList3,#priceList4, #priceList5').hide();
    });
    $('.memberBtn2').click(function (e) { 
        $('.memberBtn2').toggleClass('btn-primary');
        $('.memberBtn1, .memberBtn3, .memberBtn4, .memberBtn5').addClass('btn-primary');
        $('#priceList2').show();
        $('#priceList1, #priceList3,#priceList4, #priceList5').hide();
    });
    $('.memberBtn3').click(function (e) { 
        $('.memberBtn3').toggleClass('btn-primary');
        $('.memberBtn1, .memberBtn2, .memberBtn4, .memberBtn5').addClass('btn-primary');
        $('#priceList3').show();
        $('#priceList1, #priceList2,#priceList4, #priceList5').hide();
    });
    $('.memberBtn4').click(function (e) { 
        $('.memberBtn4').toggleClass('btn-primary');
        $('.memberBtn1, .memberBtn2, .memberBtn3, .memberBtn5').addClass('btn-primary');
        $('#priceList4').show();
        $('#priceList1, #priceList2,#priceList3, #priceList5').hide();
    });
    $('.memberBtn5').click(function (e) { 
        $('.memberBtn5').toggleClass('btn-primary');
        $('.memberBtn1, .memberBtn2, .memberBtn3, .memberBtn4').addClass('btn-primary');
        $('#priceList5').show();
        $('#priceList1, #priceList2,#priceList3, #priceList4').hide();
    });


    $('.faq1').click(function (e) {
        $('.faq1 h4').toggleClass('lightBlue');
        $('.faq2 h4, .faq3 h4').removeClass('lightBlue');
        $('.faq1 span').html('－');
        $('.faq2 span, .faq3 span').html('＋');
        $('#ans1').slideToggle();
        $('#ans2, #ans3').slideUp();
    });
    $('.faq2').click(function (e) {
        $('.faq2 h4').toggleClass('lightBlue');
        $('.faq1 h4, .faq3 h4').removeClass('lightBlue');
        $('.faq2 span').html('－');
        $('.faq1 span, .faq3 span').html('＋');
        $('#ans2').slideToggle();
        $('#ans1, #ans3').slideUp();
    });
    $('.faq3').click(function (e) {
        $('.faq3 h4').toggleClass('lightBlue');
        $('.faq1 h4, .faq2 h4').removeClass('lightBlue');
        $('.faq3 span').html('－');
        $('.faq1 span, .faq2 span').html('＋');
        $('#ans3').slideToggle();
        $('#ans1, #ans2').slideUp();
    });

});