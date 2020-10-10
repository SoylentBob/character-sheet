import Perk from '@/model/perk/Perk';

class Talent {
    readonly label: string;
    readonly value: string;
    readonly description: string;
    readonly cost: number;
    readonly perks: Perk[];

    constructor(label: string, value: string, description: string, cost: number, perks: Perk[]) {
        this.label = label;
        this.value = value;
        this.description = description;
        this.cost = cost;
        this.perks = perks;
    }
}

export default Talent;