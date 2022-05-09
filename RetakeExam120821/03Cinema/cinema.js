let expect = require("chai").expect;

const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

describe("Tests …", () => {
    describe("showMovies", () => {
        it('work correctly', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']))
                .to.be.equal('King Kong, The Tomorrow War, Joker');
        });
        it('empty array', function () {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.')
        });
    });
    describe("ticketPrice", () => {
        it('Premiere', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12);
        });
        it('Normal', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.5);
        });
        it('Discount', function () {
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.5);
        });
        it('should trow when invalid input ', function () {
            expect(()=>cinema.ticketPrice('Invalid')).to.throw('Invalid projection type.');
        });
    });
    describe('swapSeatsInHall',function (){
        it('should fail', function () {
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1.25,20)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,19.7)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,21)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(-1,20)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,-20)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(0,20)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,0)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall('1',20)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,'20')).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(null,20)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,null)).to.equal('Unsuccessful change of seats in the hall.')
        });
        it('should work fine', function () {
            expect(cinema.swapSeatsInHall(1,20)).to.equal('Successful change of seats in the hall.')
        });
    })
});

