/**
 * Created by nicholaslupu on 2/09/2016.
 */

function checkPropAd() {
    var ad = document.getElementById("address").value;
    if (ad == "") {
        $('#mandatoryPropAd').show();
    }
    else {
        $('#mandatoryPropAd').hide();
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkEmail() {
    var email = document.getElementById("email").value;
    if (email == "") {
        $('#mandatoryEmail').show();
        $('#invalidEmail').hide();
    }
    else if (validateEmail(email) == false) {
        $('#invalidEmail').show();
        $('#mandatoryEmail').hide();
    }
    else {
        $('#invalidEmail').hide();
        $('#mandatoryEmail').hide();
    }
}

function checkPrices() {
    var sale = document.getElementById("salePrice").value.replace(/,/g,'');
    var percent = document.getElementById("calcDeposit").value;
    if (sale == "" && percent == "") {
        $('#mandatorySalePrice').show();
        $('#mandatoryDeposit').show();
    }
    else if (sale == "" || parseInt(sale) > 100000000) {
        $('#mandatorySalePrice').show();
        $('#mandatoryDeposit').hide();
    }
    else if (percent =="") {
        $('#mandatorySalePrice').hide();
        $('#mandatoryDeposit').show();
    }
    else {
        $('#mandatorySalePrice').hide();
        $('#mandatoryDeposit').hide();
    }
}

function validateBillCode(code) {
    var bcode = /^[0-9]*$/;
    return bcode.test(code);
}

function checkBillCode() {
    var code = document.getElementById("billcode").value;
    if (code == "" || code.length < 6 || validateBillCode(code) == false) {
        $('#mandatoryBillcode').show();
    }
    else {
        $('#mandatoryBillcode').hide();
    }
}

function checkPercent(input) {
    if (input.value < 1) document.getElementById('calcDeposit').value="";
    if (input.value > 100) input.value = 100;
}

function depositPercentage() {
    document.getElementById("depositPercent").value = ""

}

function calculate() {
    var price = document.getElementById("salePrice").value.replace(/\,/g,'');
    var percent = document.getElementById("depositPercent").value;
    if (price ==  "") {
        document.getElementById("calcDeposit").value = "";
        document.getElementById("depositPercent").value = "";
    }
    else if (percent != 0 && parseInt(price) <= 100000000) {
        amount = (parseInt(price)*parseInt(percent))/100;
        document.getElementById("calcDeposit").value = amount.toFixed(2);
    }
}

function validate(event) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9\b]/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}


$(function () {
    $("#salePrice").bind("change keyup",
        function () {
            if ($("#salePrice").val() != "")
                $(this).closest("form").find("#depositPercent").removeAttr("disabled");
            else
                $(this).closest("form").find("#depositPercent").attr("disabled", "disabled");
        });
});

function closeNav() {
    document.getElementById("welcome").style.height = "0%";
    document.getElementById("toPayer").style.height = "0%";

}

function passToPayer() {
    document.getElementById("toPayer").style.height = "100%";
}

function addBorder() {
    document.getElementById("calcDepositAud").style.borderBottom = "2px solid #0675c2";
}

function removeBorder() {
    document.getElementById("calcDepositAud").style.borderBottom = "1px solid lightgrey";
}

function addBorder2() {
    document.getElementById("salePriceAud").style.borderBottom = "2px solid #0675c2";
}

function removeBorder2() {
    document.getElementById("salePriceAud").style.borderBottom = "1px solid lightgrey";
}

function addBorder3() {
    document.getElementById("depositPercentPercent").style.borderBottom = "2px solid #0675c2";
}

function removeBorder3() {
    document.getElementById("depositPercentPercent").style.borderBottom = "1px solid lightgrey";
}

function getDate() {
    var today = new Date();
    var dd= today.getDate();
    var mm = today.getMonth()+1;
    var yyyy= today.getFullYear();
    var hour = today.getHours();
    var mins = today.getMinutes();
    var secs= today.getSeconds();
    if (dd < 10) {dd = "0" + today.getDate();}
    if (mm < 10) {
        var mmm = today.getMonth()+1;
        mm = "0" + mmm;
    }
    if (hour < 10) {hour = "0" + today.getHours();}
    if (mins < 10) {mins = "0" + today.getMinutes();}
    if (secs < 10) {secs = "0" + today.getSeconds();}
    document.getElementById("date").innerHTML = dd + "/" + mm + "/" + yyyy + " " + hour + ":" + mins + ":" + secs;
}

function openReceipt() {
    document.getElementById("receipt").style.height = "100%";
    getDate();
}

function goToHome() {
    location.href = "/index.html";
}

function validateEntryBSB(event) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9\-\b]/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function validateAccNo(event) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9\b]/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function validateAccName(event) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[a-zA-Z0-9\b'\s]/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function checkTerms() {
    var terms = document.getElementById("acceptTcs").checked;
    if (terms != true) {
        $('#checkTerms').show();
    } else {
        $('#checkTerms').hide();
    }
}

function authAccount() {
    var auth = document.getElementById("authorised").checked;
    if (auth != true) {
        $('#authorisedAccount').show();
    } else {
        $('#authorisedAccount').hide();
    }
}

function checkAccName() {
    var accname = document.getElementById("accName").value;
    if (accname == "" || accname.length < 4) {
        $('#mandatoryAccName').show();
    } else {
        $('#mandatoryAccName').hide();
    }
}

function checkAccNo() {
    var accno = document.getElementById("accNo").value;
    if (accno == "" || accno.length < 6) {
        $('#mandatoryAccNo').show();
    } else {
        $('#mandatoryAccNo').hide();
    }
}

function validateBSB(bsb) {
    var re = /^(?:\d{3}-|\d{3})\d{3}$/;
    return re.test(bsb);
}

function checkBSB() {
    var bsb = document.getElementById("bsb").value;
    if (validateBSB(bsb) == false) {
        $('#mandatoryBsb').show();
    }
    else {
        $('#mandatoryBsb').hide();
    }
}

function openTerms() {
    document.getElementById("termsOfUse").style.height = "100%";
}

function closeTerms() {
    document.getElementById("termsOfUse").style.height = "0%";
}

function goBack() {
    window.history.back();
}

function openTitleNav() {
    document.getElementById("welcome").style.height = "100%";
    document.getElementById("salePrice").addEventListener("focus", addBorder2);
    document.getElementById("salePrice").addEventListener("blur", removeBorder2);
    document.getElementById("depositPercent").addEventListener("focus", addBorder3);
    document.getElementById("depositPercent").addEventListener("blur", removeBorder3);
    document.getElementById("calcDeposit").addEventListener("focus", addBorder);
    document.getElementById("calcDeposit").addEventListener("blur", removeBorder);
    document.addEventListener('invalid', (function () {
        return function (e) {
            e.preventDefault();
            checkEmail();
            checkBillCode();
            checkPropAd();
            checkPrices();
        };
    })(), true);
    $('#salePrice').keyup(function(event) {
        if(event.which >= 37 && event.which <= 40 || event.which == 0) return;

        $(this).val(function(index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ;
        });
    });
}

function makePaymentCheck() {
    document.addEventListener('invalid', (function () {
        return function (e) {
            e.preventDefault();
            checkEmail();
            checkAccNo();
            checkAccName();
            checkBSB();
            checkTerms();
            authAccount();
        };
    })(), true);
}

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass("down");
}

function chevron() {
    $('.panel').on('hidden.bs.collapse', toggleChevron);
    $('.panel').on('shown.bs.collapse', toggleChevron);
}

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('address')),
        {types: ['geocode']});
}

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}

function validateComplete(){
    if ($('#billcode').val().length   >   0   &&
        $('#email').val().length  >   0   &&
        $('#address').val().length    >   0 &&
        ($('#calcDeposit').val().length >   0 || $('#depositPercent').val().length > 0) ) {
        $("#agentNext").prop("disabled", false);
    }
    else {
        $("#agentNext").prop("disabled", true);
    }
}

function validateCompletePayer(){
    if ($('#bsb').val().length   >   0   &&
        $('#email').val().length  >   0   &&
        $('#accNo').val().length    >   0 &&
        $('#accName').val().length >   0  ) {
        $("#payerNext").prop("disabled", false);
    }
    else {
        $("#payerNext").prop("disabled", true);
    }
}


