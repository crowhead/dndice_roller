var DiceRoller = {
    roll: function(sides, modifier, numberOfDie) {
        modifier = (typeof modifier !== 'undefined') ? parseInt(modifier, 10) : 0;
        numberOfDie = (typeof numberOfDie !== 'undefined') ? parseInt(numberOfDie, 10) : 1;
        var die_sum = 0;
        for (var i=1; i<=numberOfDie; i++) {
          var roll = Math.ceil(Math.random() * sides) + modifier;
          die_sum = die_sum + roll;
        }
        return die_sum;
    }
};

// dice roll function with modifier and number-of-die calculations
$(document).ready(function(){

  $('.roll_button').click(function(){
    var die = $(this);
    var row = die.parents("tr");
    var modifier = $(".modifier", row).val();
    var numberOfDie = $(".numberOfDie", row).val();
    var results_display = $(".roll_results", row);
    var sides = $(this).data('sides');
    var roll = DiceRoller.roll(sides, modifier, numberOfDie);
    results_display.val(roll);
  });

// fail and crit messages for d20
  $('.d20').click(function(){
    var originalDieResult = $(".roll_results", $(this).parents('tr')).val() - $(".modifier", $(this).parents('tr')).val();
    if (originalDieResult === 20) {
      var image_tag_crit = '<img src="https://s3-us-west-2.amazonaws.com/dndiceroller/Crit_message.gif">';
      var crit_audio = '<audio src="http://unrealtournament.99.free.fr/utfiles/sound%20ut/Ownage.wav" id="crit_audio"></audio>';
      $('.main').append(image_tag_crit);
      $('.main').append(crit_audio);
      document.getElementById('crit_audio').play();
    } else if (originalDieResult === 1) {
      var image_tag_fail = '<img src="https://s3-us-west-2.amazonaws.com/dndiceroller/fail_message.gif">';
      var fail_audio = '<audio src="http://wavcentral.com/sounds/televis/price_is_right/tpirhorns.mp3" id="fail_audio"></audio>';
      $('.main').append(image_tag_fail);
      $('.main').append(fail_audio);
      document.getElementById('fail_audio').play();
    } else {
      return;
    }
  });

});

