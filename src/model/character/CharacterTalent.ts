import Talent from '@/model/talent/Talent';
import D4 from '@/model/dice/D4';
import D6 from '@/model/dice/D6';
import D8 from '@/model/dice/D8';
import D10 from '@/model/dice/D10';
import D12 from '@/model/dice/D12';
import D20 from '@/model/dice/D20';
import D100 from '@/model/dice/D100';

class CharacterTalent {
    readonly talent: Talent;
    level: number;

    constructor(talent: Talent, level: number) {
        this.talent = talent;
        this.level = level;
    }

    public cost() {
        return (this.level - 2) / 2 * this.talent.cost
    }

    public dice() {
        switch(this.level) {
            case 4:
                return new D4();

            case 6:
                return new D6();

            case 8:
                return new D8();


            case 10:
                return new D10();

            case 12:
                return new D12();


            case 20:
                return new D20();

            case 100:
                return new D100();
        }
    }
}

export default CharacterTalent;