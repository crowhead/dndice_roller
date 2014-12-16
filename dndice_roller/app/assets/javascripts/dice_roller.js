var DiceRoller = {
    roll: function(sides) {
        return Math.ceil(Math.random() * sides);
    }
};


$(document).ready(function(){

  $('.dice').click(function(){
    var die = $(this);
    var row = die.parents("tr");
    var results_display =$(".roll_results", row)
    var sides = $(this).data('sides');
    var roll = DiceRoller.roll(sides);
    results_display.val(roll);
  });

});
