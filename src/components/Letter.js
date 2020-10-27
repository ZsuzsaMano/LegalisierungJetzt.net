import React from 'react';
import languagesObject from '../languagesObject';

const Letter = ({ language }) => {
  return(
    <main className="letter">
      <article className="letter__article">
        <h2 className="letter__title title" id="title">{languagesObject.[language].title}
          </h2>
        <p className="letter__text dark-box" id='letter__text'>
        {languagesObject.[language].letter}
        </p>
      </article>
      <div className="signatories">
        <h3 id="signatories">{languagesObject.[language].signatories}</h3>
        <p>Respect Berlin,
          Solidarity City Berlin,
          La Casita,
          La Pachangona,
          Asamblea Mujeres Disidencias Sexuales/Bloque Latinoamericano,
          Justizwatch,
          KuB – Kontakt- und Beratungsstelle für Flüchtlinge und Migrant_innen e.V.,
          Oficina Precaria,
          LAFI – Lateinamerikanische FrauenInitiative in Neukölln e.V.,
          No Border Assembly Berlin,
          Migrationsrat Berlin e.V.,
          Voces de Guatemala,
          Corasol,
          Women in Exile,
          ABA - Aktionsbündnis Antira,
          korientation. Netzwerk für Asiatisch-Deutsche Perspektiven e.V.,
          NaturFreunde Berlin,
          Die Meute,
          Sprungbrett Zukunft Berlin e.V.,
          xart splitta e.V.,
          Seebrücke Berlin,
          Flüchtlingsrat Berlin,
          Medibüro Berlin,
          Each One Teach One (EOTO) e.V.,
          TransInterQueer e.V.,
          Verein Migration, Entwicklung und Partizipation MEPa e.V.,
          CILIP – Bürgerrechte und Polizei,
          Berliner Bündnis gegen Rechts,
          glokal e.V. Berlin,
          Gabriela Germany,
          Netzwerk Reproduktive Gerechtigkeit Berlin,
          kitchen politics,
          Theater X,
          Migrantifa Berlin,
          Anna-Maria Wünst,
          Unidos por la paz,
          Radio Matraca,
          Nachrichten Pool Lateinamerika e.V.,
          Frauenkreise Berlin,
          Space2groW,
          Kolumbienkampagne Berlin,
          borderline-europe Menschenrechte ohne Grenzen e.V.,
          Initiative Schwarze Menschen in Deutschland ISD,
          Death in Custody - Bündnis,
          International Women Space,
          Culture of Deportation,
          Critical Workers Berlin,
          SolA,
          Colectivo MAWVN, Berlin,
          Andrea Molina,
          LINKS*KANAX Berlin,
          ReachOut – Opferberatung und Bildung gegen Rechtsextremismus, Rassismus und Antisemitismus
          Allmende e.V.,
          RaumErweiterungsHalle,
          We'll come united Berlin / Brandenburg,
          association14a,
          FAU Berlin </p>
        </div>
    </main>
  );
};

export default Letter;
