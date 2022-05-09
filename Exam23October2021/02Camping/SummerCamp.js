class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500}
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        money = Number(money)
        if (!this.priceForTheCamp[condition]) {
            throw Error('Unsuccessful registration at the camp.')
        }
        if (this.listOfParticipants.some(p => p.name === name)) {
            return (`The ${name} is already registered at the camp.`)
        }
        //let participant = this.listOfParticipants.find(p => p.name == name)
        if (money < this.priceForTheCamp[condition]) {
            return ('The money is not enough to pay the stay at the camp.')
        }
        this.listOfParticipants.push({name, condition, "power": 100, "wins": 0})
        return `The ${name} was successfully registered.`

    }

    unregisterParticipant(name) {
        let index = this.listOfParticipants.findIndex(p => p.name == name);
        if (index != -1) {
            this.listOfParticipants.splice(index, 1)
            return `The ${name} removed successfully.`
        } else {
            throw Error(`The ${name} is not registered in the camp.`)
        }

    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let p1;
        let p2;

        if (!this.listOfParticipants.some(p => p.name == participant1)) {
            throw Error(`Invalid entered name/s.`)
        } else {
            p1 = this.listOfParticipants.find(p => p.name === participant1);
        }
        if (participant2 !== undefined) {
            if (!this.listOfParticipants.some(p => p.name === participant2)) {
                throw Error(`Invalid entered name/s.`)
            } else {
                p2 = this.listOfParticipants.find(p => p.name === participant2);
            }
        }
        if (p2 !== undefined && p1.condition !== p2.condition) {
            throw Error`Choose players with equal condition.`
        }


        if (typeOfGame === 'Battleship') {
            p1.power += 20;
            return `The ${p1.name} successfully completed the game ${typeOfGame}.`

        } else if (typeOfGame === 'WaterBalloonFights') {
            if (p1.power > p2.power) {
                p1.wins += 1;
                return `The ${p1.name} is winner in the game ${typeOfGame}.`
            } else if (p2.power > p1.power) {
                p2.wins += 1;
                return `The ${p2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        }

    }

    toString() {
        let result = []
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
            .forEach((p) => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`))
        return result.join('\n')
    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
//console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
