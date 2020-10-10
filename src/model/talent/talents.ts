import Talent from '@/model/talent/Talent';
import Perk from '@/model/perk/Perk';

const talents = [
    new Talent(
        'Stärke', 
        'STRENGTH', 
        'Repräsentiert die körperliche Kraft und Widerstandskraft deines Charakters.\n\n' +
        'Aus diesem Wert werden die Lebenspunkte, der unbewaffnete Schaden und die Regeneration der Lebenspunkte ermittelt.', 
        2,
        [
            new Perk('Weste', 'Schadensadsorption +2'),
            new Perk('Eisenkiefer', '')
        ],
        ),
    new Talent(
        'Gewandtheit', 
        'AGILITY', 
        'Repräsentiert die Schnelligkeit und Körperbeherrschung deines Charakters.\n\n' +
        'Aus diesem Wert werden die Initiative und der Bewegungsradius des Charakters ermittelt.', 
        2,
        [
            new Perk('Leichtes Marschgepäck', 'Schadensadsorption +2'),
        ],
        ),
    new Talent(
        'Nahkampf', 
        'MELEE_COMBAT', 
        'Repräsentiert die Erfahrung deines Charakters im Nahkampf.',
        2,
        [
            new Perk('Baseballschläger', ''),
            new Perk('Axt', ''),
        ],
        ),
    new Talent(
        'Fernkampf', 
        'RANGED_COMBAT', 
        'Repräsentiert die Erfahrung deines Charakters mit Fernkampf- und Wurfwaffen.',
        2,
        [
            new Perk('Maschinengewehr', ''),
            new Perk('Schrotflinte', ''),
            new Perk('Karabiner', ''),
        ],
        ),
    new Talent(
        'Technik', 
        'MECHANICS', 
        'Repräsentiert die Erfahrung deines Charakters im Umgang mit Technik und Maschinen',
        1,
        [
            new Perk('Werkzeugkiste', ''),
        ],
        ),
    new Talent(
        'Wissen', 
        'KNOWLEDGE', 
        'Repräsentiert das Wissen deines Charakters',
        2,
        [
            new Perk('Almanach', ''),
        ],
        ),
    new Talent(
        'Wahrnehmung', 
        'PERCEPTION', 
        'Repräsentiert die Sinnesschärfe deines Charakters',
        1,
        [
            new Perk('Fernglas', ''),
        ],
        ),
    new Talent(
        'Fahrzeuge steuern', 
        'VEHICLES', 
        'Repräsentiert die Erfahrung deines Charakters im Umgang mit Fahrzeugen, wie Autos, Transportern oder Motorrädern.',
        1,
        [
            new Perk('Flugschein', ''),
        ],
        ),
    new Talent(
        'Heimlich', 
        'SECRETLY', 
        'Repräsentiert die Fähigkeit des Charakters heimliche Aktionen durchzuführen.',
        1,
        [
            new Perk('Leise Sohlen', ''),
            new Perk('Klaviersaite', ''),
        ],
        ),
    new Talent(
        'Reden', 
        'TALK', 
        'Repräsentiert die Wortgewandtheit und Überzeugungsfähigkeit deines Charakters',
        1,
        [
            new Perk('Charmebolzen', ''),
        ],
        ),
];

export default talents;