import CharacterSheets from '@/model/character/CharacterSheets';
import CharacterSheet from '../CharacterSheet';

class LocalStorageCharacterSheets implements CharacterSheets {

    private readonly localStorage = localStorage;

    list(): CharacterSheet[] {
        const characters = this.localStorage.getItem('characters');

        if(characters) {
            return JSON.parse(characters);
        }

        return [];
    }

    findById(id: number): CharacterSheet | null {
        if(id < this.list().length) {
            return this.list()[id];
        }

        return null;
    }

    add(characterSheet: CharacterSheet): void {
        const characters = this.list();

        characters.push(characterSheet);

        this.localStorage.setItem('characters', JSON.stringify(characters));
    }

};

export default LocalStorageCharacterSheets;