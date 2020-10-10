import CharacterTalent from '@/model/character/CharacterTalent';

class CharacterSheet {
    name: string
    readonly talents: CharacterTalent[]
    readonly totalTalentPoints: number;

    constructor(name: string, talents: CharacterTalent[], totalTalentPoints: number) {
        this.name = name;
        this.talents = talents;
        this.totalTalentPoints = totalTalentPoints;
    }

    public usedTalentPoints() {
        return this.talents.map(v => v.talent.cost * (v.level - 4) / 2).reduce((a, b) => a + b);
    }
};

export default CharacterSheet;