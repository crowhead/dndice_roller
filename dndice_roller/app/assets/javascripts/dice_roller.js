var DiceRoller = {
    roll: function(sides, modifier, numberOfDie) {
        return Math.ceil(Math.random() * sides) * numberOfDie + modifier;
    }
};


$(document).ready(function(){

  $('.dice').click(function(){
    var die = $(this);
    var row = die.parents("tr");
    var modifier = $(".modifier", row).val();
    var minus_modifier = $(".minus_modifier", row).val();
    if (minus_modifier){
      modifier = modifier * -1
    }
    var numberOfDie = $(".numberOfDie", row).val();
    var results_display = $(".roll_results", row);
    var sides = $(this).data('sides');
    var roll = DiceRoller.roll(sides, modifier, numberOfDie);

    results_display.val(roll);
  });

});
