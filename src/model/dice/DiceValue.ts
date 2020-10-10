class DiceValue {
    readonly value: number;
    readonly exploded: boolean;

    constructor(value: number, exploded: boolean) {
        this.value = value;
        this.exploded = exploded;
    }
}

export default DiceValue;