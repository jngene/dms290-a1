function scrollUp() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function bookTrip() {
  window.location.href = 'https://www.expedia.com/Copenhagen.d178252.Destination-Travel-Guides';
}


$( document ).ready(function() {

  var mainTitle = $('.main-title');

  var kirkenImage = $('#kirken-image');
  var copenhillImage = $('#copenhill-image');

  var mainTitleHeight = mainTitle.height();
  var heightOfKirken = kirkenImage.height();
  var heightOfCopenhill = copenhillImage.height();

  mainTitle.height('10px');
  kirkenImage.height('10px');
  copenhillImage.height('10px');

  mainTitle.animate({height:mainTitleHeight},500,function(){
    kirkenImage.animate({height: heightOfKirken},function() {
      copenhillImage.animate({height: heightOfCopenhill});
    });
  })
  

  
});