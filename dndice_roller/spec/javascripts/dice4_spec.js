//= require underscore
//= require dice_roller
var DiceRoller = {
    roll: function(sides) {
        return Math.ceil(Math.random() * sides);
    }
};

function number_of_attempts(sides) {
    return sides * (sides + 1);
}

describe('DiceRoller', function() {

    describe('.roll(4)', function() {
        var sides = 4;

        it("never not generate a zero", function() {
            // testing a random number, so we test many times
            for (var i = 0; i <= number_of_attempts(sides); i++) {
                expect(DiceRoller.roll(sides)).not.toBe(0);
            }
        });

        it("generates random number between 1 and 4", function() {
            var possible_outcomes = [1, 2, 3, 4];
            for (var i = 0; i <= number_of_attempts(sides); i++) {
                expect(possible_outcomes).toContain(DiceRoller.roll(sides));
            }
        });
    });

    describe('.roll(12)', function() {
        var sides = 12;

        it("generates random number between 1 and 12", function() {
            var possible_outcomes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            for (var i = 0; i <= number_of_attempts(sides); i++) {
                expect(possible_outcomes).toContain(DiceRoller.roll(sides));
            }
        });
    });

    describe('.roll(100)', function() {
        var sides = 100;

        it("generates random number between 1 and 100", function() {
            var possible_outcomes = _.range(1, 101);
            for (var i = 0; i <= number_of_attempts(sides); i++) {
                expect(possible_outcomes).toContain(DiceRoller.roll(sides));
            }
        });
    });
});
