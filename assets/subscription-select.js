// Subscription - Direct User to Correct Product

var buttonUrl = "";
var months = "";
var pouches = "";

// Select Number of Months
$('.step.one a').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('selected');
  months = $(this).attr('id');
  console.log($(this).attr('id'));
});
