$(function(){
    "use strict";
    //============= SWITCH INTRO BACKGROUNDS=============
    setInterval(() => $(".intro-bg-2").fadeToggle(600), 7000)

    // ============= SHOW FULL REVIEW ================= 
    $(".button-more").click(function(){
        let textField = $(this).siblings(".review")
        if($(this).get(0).innerText.toLowerCase() == 'развернуть') {
            textField.addClass("review--no-shadow")
            $(this).text("cвернуть")
            textField.animate({
                height: textField.get(0).scrollHeight
            })
        } else {
            textField.removeClass("review--no-shadow")
            $(this).text("развернуть")
            textField.animate({
                height: '10em'
            })
        }
    })

    // ========= MENU SCROLLS ============
    $(".nav__option").click(function(event) {
        let scrollTo = ""
        let sectionName = event.target.innerText.toLowerCase()
        if (sectionName == 'особенности') {
            scrollTo = ".features-wrapper"
        } else if (sectionName == 'опыт выпускников') {
            scrollTo = ".exp-wrapper"
        } else if (sectionName == 'твое будущее') {
            scrollTo = ".future-wrapper"
        } else if (sectionName == 'процесс обучения') {
            scrollTo = ".disc-wrapper"
        } else if (sectionName == 'для абитуриента') {
            scrollTo = ".req-wrapper"
        } else if (sectionName == 'контакты') {
            scrollTo = ".footer-wrapper"
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`${scrollTo}`).offset().top
        }, 1000);
    });

    // ========== SCROLL TO TOP BUTTON ======== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        
            $('#return-to-top').fadeIn(200);    
        } else {
            $('#return-to-top').fadeOut(200);   
        }
    });
    $('#return-to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                       
        }, 500);
    });

    //=========== GALLERY SWITCH ==============
    let switchCount = 0
    function moveRight() {
        if (switchCount < 2) {
            $(".gallery-images").animate({
                left: '+=-16em'
            })
            switchCount++
        } 
    }
    function moveLeft() {
        if (switchCount != 0) {
            $(".gallery-images").animate({
                left: '-=-16em'
            })
            switchCount--
        }
    }

    let switchInterval = setInterval(function() {
        if (switchCount < 2) {
            moveRight()
        } else {
            moveLeft()
            moveLeft()
        }
    }, 5000)

    $(".switch-left").click(moveLeft).click(()=>clearInterval(switchInterval))
    $(".switch-right").click(moveRight).click(()=>clearInterval(switchInterval))
})