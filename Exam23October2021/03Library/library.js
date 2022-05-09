let expect = require("chai").expect;

const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

describe("Tests …", function() {
    describe("calcPriceOfBook …", function() {
        it("test standard price …", function() {
            expect(library.calcPriceOfBook("book", 1981)).to.be.equal(`Price of book is 20.00`)
        });
        it("test reduced standard price …", function() {
            expect(library.calcPriceOfBook("book", 1980)).to.be.equal(`Price of book is 10.00`)
            expect(library.calcPriceOfBook("book", 1970)).to.be.equal(`Price of book is 10.00`)
        });
        it('should throw if invalid input', function () {
            expect(()=>(library.calcPriceOfBook('book', 1980.12))).to.throw('Invalid input')
        });
        it('should throw if invalid input', function () {
            expect(()=>(library.calcPriceOfBook(undefined, 1980))).to.throw('Invalid input')
            expect(()=>(library.calcPriceOfBook(12, 1980))).to.throw('Invalid input')
        });
    });
    describe('findBook', function () {
        it('should throw with no books', function () {
            expect(()=>(library.findBook([],'book'))).to.throw('No books currently available')
        });
        it('should find book', function () {
            expect(library.findBook(['book'],'book')).to.be.equal('We found the book you want.')
        });
        it('should not find book', function () {
            expect(library.findBook(['nobook'],'book')).to.be.equal('The book you are looking for is not here!')
        });

    })
    describe('arrangeTheBooks',function (){
        it('should trow if invalid input',function () {
            expect(()=>library.arrangeTheBooks(1.1)).to.throw('Invalid input')
            expect(()=>library.arrangeTheBooks(-1)).to.throw('Invalid input')
            expect(()=>library.arrangeTheBooks('1')).to.throw('Invalid input')
        })
        it('should work', function () {
            expect(library.arrangeTheBooks(0)).to.be.equal('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.')
        });
    })
});
