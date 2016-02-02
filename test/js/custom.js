//Start Hamburger menu animation
(function() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
})();
//End Hamburger menu animation


//Start side bar affix
$( document ).ready(function() {
    $('#MyAffix').affix('checkPosition');
});

$('#MyAffix').affix({
  offset: {top:110, bottom: 60}
})

$(window).scroll(function() {
if ($(this).scrollTop() > 50){  
    $('#subNav').addClass("navbar-fixed-top");
    $('.subNavreplace').addClass("replace");
  }
  else{
    $('#subNav').removeClass("navbar-fixed-top");
    $('.subNavreplace').removeClass("replace");
  }
}); 
//End side bar affix


//Start card flip
(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    $(".btn-flip").click(function() {
         var c = card.classList;
         c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
         return true;
    });
  }
})();
//End card flip


//Start Form select function
$('.formSelect').click(function(){
    $('.selectToggle',this).slideToggle('fast', "swing");
    return false;
});
            
$(".formSelect dl dd ul li a").click(function() {
    var text = $(this).html();
    $(this).parents('.formSelect').children('dl').children('dt').children('a').html(text).addClass('dataSelectWrap');

    $('.selectToggle',this).hide();
});
            
function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("formSelect"))
        $(".formSelect dd ul").hide();
}); 

//End Form select function


//Start print
$( document ).ready(function() {
    $('.lnkPrint').click(function()
     {
         window.print();
     });
});
//End print


//Start row show
$(".addRow").click(function(){
    setTimeout(function() {
    $(".row-hidden").addClass("in");
    }, 600);
});

//End row show


//Start show hide
$("#suggestShow").click(function(){
    $("#nonAuto").hide();
    $("#autoSuggest").show();
    return false;
});
$("#suggestHide").click(function(){
    $("#autoSuggest").hide();
    $("#nonAuto").show();
    return false;
});
$("#mobileHide").click(function(){
        $("#mobile").hide();
        $("#landline").show();
        return false;
});
$("#mobileShow").click(function(){
    $("#landline").hide();
    $("#mobile").show();
    return false;
});
//End show hide


//Start dropDown show
$(".toggleDropdown").click(function(){
    $(this).siblings('.dropdownDiv').slideToggle(100);
});
//End dropDown show


//Start search filter hide
$(".search").focus(function (){
    $('.searchFilter').hide();
    $(this).addClass("fullWidth");
}).blur(function () {
    $('.search').removeClass("fullWidth");
    setTimeout(function() {
        $('.searchFilter').show();
    }, 300);

});
//End search filter hide


//Start tag select
$("a.sTag").click(function(){
    $(this).toggleClass('nonSelect');
});
//End tag select


//Start call modal
$(".modalEditDRN").click(function(){
    $('.modalEditDRNModal').modal('show');
});
$(".modalAddDRN").click(function(){
    $(".TnCmodal").modal();
    return false;
});
$(".modalAddCard").click(function(){
    $(".modalAddCardModal").modal();
    return false;
});
$(".modalEditCard").click(function(){
    $(".modalEditCardModal").modal();
    return false;
});


$(".modalEditCard").click(function(){
    $('.modalDDAeditModal').modal('hide');
    setTimeout(function() {
        $(".modalEditCardModal").modal();
    }, 600);
});
$(".modalUpdate").click(function(){
    $('.modalEditCardModal').modal('hide');
    setTimeout(function() {
        $(".modalDDAeditModal").modal();
    }, 600);
});
$(".modalDDAView").click(function(){
    $('.modalDDAViewModal').modal();
});
$(".sendemail").click(function(){
    $('.modalpayHistoryModal').modal('hide');
    setTimeout(function() {
        $(".modalreceiptEmailed").modal();
    }, 600);
});
$(".sendFeedback").click(function(){
    $('.modaldeclined').modal('hide');
    setTimeout(function() {
        $(".thankyou").modal();
    }, 600);
});
$(".confirmRemove").click(function(){
    $('.modalEdit').modal('hide');
    setTimeout(function() {
        $(".removeDRN").modal();
    }, 600);
});
$(".DRNupdate").click(function(){
    $('.modalEdit').modal('hide');
    setTimeout(function() {
        $(".confirmDRNupdate").modal();
    }, 600);
});
$(".paymentRemoved").click(function(){
    $('.modalCardEdit').modal('hide');
    setTimeout(function() {
        $(".removePM").modal();
    }, 600);
});
$(".cardUpdate").click(function(){
    $('.modalCardEdit').modal('hide');
    setTimeout(function() {
        $(".confirmPMupdate").modal();
    }, 600);
});
$(".DDAcancelled").click(function(){
    $('.modalCardEdit').modal('hide');
    setTimeout(function() {
        $(".cancelDDA").modal();
    }, 600);
});
$(".ddaUpdate").click(function(){
    $('.modalDDAeditModal').modal('hide');
    setTimeout(function() {
        $(".confirmDDAupdate").modal();
    }, 600);
});
$(".confirmDelete").click(function(){
    $('.modalDelete').modal('hide');
    setTimeout(function() {
        $(".modalconfirmDelete").modal();
    }, 600);
});
$(".cancelSchedule").click(function(){
    $('.modalDeleteSchedule').modal('hide');
    setTimeout(function() {
        $(".cancelScheduleConfirm").modal();
    }, 600);
});
$(".UpdateSchedule").click(function(){
    $('.modalDeleteSchedule').modal('hide');
    setTimeout(function() {
        $(".confirmScheduleupdate").modal();
    }, 600);
});
//End call modal
