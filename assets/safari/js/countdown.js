// Set up your end date just below
$('#clock').countdown('2021/02/22 08:00:30', function(event) {

    var $this = $(this).html(event.strftime(''
    + '<div class="col-xs-6 col-sm-3 col-lg-3">%D<span>Days</span></div> '
    + '<div class="col-xs-6 col-sm-3 col-lg-3">%H<span>Hours</span></div> '
    + '<div class="col-xs-6 col-sm-3 col-lg-3">%M<span>Minutes</span></div> '
    + '<div class="col-xs-6 col-sm-3 col-lg-3">%S<span>Seconds</span></div>'));
    
});