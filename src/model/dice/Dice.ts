import DiceValue from '@/model/dice/DiceValue';

class Dice {
    readonly face: number;

    constructor(face: number) {
        this.face = face;
    }

    public roll() {
        const rolledValue = Math.floor(Math.random() * this.face) + 1
        
        return new DiceValue(rolledValue, rolledValue === this.face);
    }
}

export default Dice;