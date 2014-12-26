var DiceRoller = {
    roll: function(sides, modifier, numberOfDie) {
        modifier = (typeof modifier !== 'undefined') ? parseInt(modifier, 10) : 0;
        numberOfDie = (typeof numberOfDie !== 'undefined') ? parseInt(numberOfDie, 10) : 1;
        var die_sum = 0;
        for (var i = 1; i <= numberOfDie; i++) {
            var roll = Math.ceil(Math.random() * sides) + modifier;
            die_sum = die_sum + roll;
        }
        return die_sum;
    }
};

// dice roll function with modifier and number-of-die calculations
$(document).ready(function() {

    // $('.dice').click(function() {
    //     $(".dice").effect("shake");
    // });

    $('.roll_button').click(function() {
        var die = $(this);
        var row = die.parents("tr");
        var modifier = $(".modifier", row).val();
        var numberOfDie = $(".numberOfDie", row).val();
        var results_display = $(".roll_results", row);
        var sides = $(this).data('sides');
        var roll = DiceRoller.roll(sides, modifier, numberOfDie);
        results_display.val(roll);
    });

    // shakes the dice
    $('.dice_container').click(function() {
        $(this).effect("shake");
    });

    // show critical message
    function showCrit(element) {
        element.removeClass('hidden');
    }

    function hideCrit(element) {
        element.addClass('hidden');
    }

    function showCritWithTimeout(element) {
        showCrit(element);
        setTimeout(function() {
            hideCrit(element);
        }, 3000);
    }

    // show fail message
    function showFail(element) {
        element.removeClass('hidden');
    }

    function hideFail(element) {
        element.addClass('hidden');
    }

    function showFailWithTimeout(element) {
        showFail(element);
        setTimeout(function() {
            hideFail(element);
        }, 3000);
    }

    // fail and crit messages for d20
    $('.d20').click(function() {
        var originalDieResult = $(".roll_results", $(this).parents('tr')).val() - $(".modifier", $(this).parents('tr')).val();
        if (originalDieResult === 20) {
            var $crit = $('#crit');
            var crit_audio = '<audio src="http://unrealtournament.99.free.fr/utfiles/sound%20ut/Ownage.wav" id="crit_audio"></audio>';
            $crit.append(crit_audio);
            showCritWithTimeout($crit);
            document.getElementById('crit_audio').play();
        } else if (originalDieResult === 1) {
            var $fail = $('#fail');
            var fail_audio = '<audio src="http://wavcentral.com/sounds/televis/price_is_right/tpirhorns.mp3" id="fail_audio"></audio>';
            $fail.append(fail_audio);
            showFailWithTimeout($fail);
            document.getElementById('fail_audio').play();
        } else {
            return;
        }
    });

// mouse scroll function
    $(function() {
    $("#scrollable ").append('<img src="images/mousewheelupdown.png" alt="Scroll up or down with mousewheel" />');
    $("#scrollable").bind("mousewheel", function(event, delta) {
        if (delta > 0) {
            this.value = parseInt(this.value) + 1;
        } else {
            if (parseInt(this.value) > 0) {
                this.value = parseInt(this.value) - 1;
            }
        }
        return false;
     });

});
});
