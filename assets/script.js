var saveBtn = $('.saveBtn');
var textboxEl = $('.description');
var timeBlock = $('.time-block');
var today = $('#currentDay');
var currentDate = dayjs().format('dddd, MMMM D, YYYY')
var currentHour = dayjs().hour();

$(function () {
  
  // event listener for save button that saves text-area content to local storage
  saveBtn.on('click', function(event) {
    var timeStamp = $(event.target).parent().attr('id');
    var message = $(event.target).parent().children().eq(1).val();
    localStorage.setItem(timeStamp, message);
  });

  
  timeBlock.each(function() {
    // gets the id for each time-block element and turns it into a number
    var calendarHour = parseInt($(this).attr('id'));
    
    // displays local storage content in the text-area
    $(this).children().eq(1).val(localStorage.getItem(calendarHour));
    
    // compare time-blocks against current hour
    if (calendarHour < currentHour) {
      $(this).addClass('past');
    } else if (calendarHour == currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
  
  // show date at top of page
  today.text(currentDate);

});

