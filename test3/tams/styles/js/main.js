$(function(){
    $('.accordion-header').click(function(){
        $(this).closest('.accordion-container').toggleClass('collapsed').find('.accordion-arrow').toggleClass('icon-arrow-up, icon-arrow-down');
    });
    
    
    
});

function toggleAnnouncement(obj) {
    if(obj.contentWindow.document.body.innerHTML == '') {
        $('#announcement').hide();
    }
}

function setSlider() {
    $('.slider .sliderBtn').click(function(){
        $(this).parent('.slider').find('.sliderContent').toggle( "fast");
    });
}
 
function setFloatingLabel() {
    $( ".inputBox" ).click(function() {
                 
         $(this).find('input').focus();
         $(this).addClass('selectedInput');
    });
    
    $( '.inputBox input' ).focus(function() {
        var el = $(this).parent('.inputBox');
        var overlayEl = el.find( ".inputOverlay" );
        if(!overlayEl.hasClass("animate-small")) {
            overlayEl.addClass("animate-small");
        }
    });
    
    $( '.inputBox input' ).blur(function() {
        $('.selectedInput').removeClass('selectedInput');
        var el = $(this).parent('.inputBox');
        setTimeout(function(){
            if(!el.hasClass('selectedInput')) {
               
                var overlayEl = el.find( ".inputOverlay" );
                var inputEl = el.find('input');
                
                if(inputEl.val() === '' && !el.hasClass('error') && overlayEl.hasClass("animate-small")) {
                    overlayEl.removeClass("animate-small");
                }
            }
        },100);
    });
}

function setBg() {
    var hour =new Date().getHours();
    if(hour>6 && hour<11) {
        $('.login-bg').addClass('morning');
    } else if(hour>=11 && hour<=17) {
        $('.login-bg').addClass('afternoon');
    } else {
        $('.login-bg').addClass('night');
    }
}
