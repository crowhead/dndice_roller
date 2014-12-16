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

  $('.dice').click(function(){
    var die = $(this);
    var row = die.parents("tr");
    var modifier = $(".modifier", row).val();
    var numberOfDie = $(".numberOfDie", row).val();
    var results_display = $(".roll_results", row);
    var sides = $(this).data('sides');
    var roll = DiceRoller.roll(sides, modifier, numberOfDie);

    results_display.val(roll);
  });

});

