$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
 
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $(".arena").height() * Math.random(),
      $(".arena").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('.arena').append(dancer.$node);

    $('.harryDancer').on('click', function(event) {
      let height = Math.random() * 85;
      let width = Math.random() * 85;
      $(event.currentTarget).animate({'left': width + '%', 'top': height + '%'})
    });

    $('.dumbledoreDancer').on('click', function(event) {
      console.log($(event.currentTarget).attr('src'))
      if($(event.currentTarget).attr('src') === 'Dumbledore2.png') {
        // $(event.currentTarget).removeAttr('src');
        $(event.currentTarget).attr('src', 'phoenix.png');  
      } else if ($(event.currentTarget).attr('src') === 'phoenix.png') {
        // $(event.currentTarget).removeAttr('src');
        $(event.currentTarget).attr('src', 'Dumbledore2.png');
      }
    });

    $('.ronDancer').on('click', function(event) {
      $('.hermoineDancer').css({'transform': 'rotate(45deg)'});
    });

    $('.hermoineDancer').on('click', function(event) {
      $(event.currentTarget).css({'transform': 'rotate(0deg)'});
    })

    $('.snapeDancer').on('click', function(event) {
      $(event.currentTarget).animate({'top': '-=20'});
    });
  })


  $('.lineUp').on('click', function(event) {
    $.each(window.dancers, function(index) {
      if(window.dancers[index].$node.hasClass('voldemortDancer')) {
        window.dancers[index].$node.css('left', '20%');
      } else {
        window.dancers[index].$node.css('left', '80%');
      }
    })
  });
  
  $('.shuffle').on('click', function(event) {
    $.each(window.dancers, function(index) {
      let height = $('.arena').height() * Math.random();
      let width = $('.arena').width() * Math.random();
      window.dancers[index].$node.css('top', height);
      window.dancers[index].$node.css('left', width);
    })
  })
});


