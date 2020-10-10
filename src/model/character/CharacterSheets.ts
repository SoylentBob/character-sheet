import CharacterSheet from '@/model/character/CharacterSheet';

interface CharacterSheets {
    list(): CharacterSheet[];
    findById(id: number): CharacterSheet | null;
    add(characterSheet: CharacterSheet): void;
}

export default CharacterSheets;