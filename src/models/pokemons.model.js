// À ajuster selon la structure
const sql = require("../config/dp_pg.js");

// constructeur
const Pokemons = (pokemons) => {
    this.nom = pokemons.nom;
    this.type_primaire = pokemons.type_primaire;
    this.type_secondaire = pokemons.type_secondaire;
    this.pv = pokemons.pv;
    this.attaque = pokemons.attaque;
    this.defense = pokemons.defense;
};

Pokemons.trouverUnPokemon = (id) => {
    return new Promise((resolve, reject) => {

        const requete = `SELECT id, nom, type_primaire, type_secondaire, pv, attaque, defense FROM pokemon WHERE id = $1;`;
        const params = [id]

        sql.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                // S'il y a une erreur, je la retourne avec reject()
                reject(erreur);
            }
            // Sinon je retourne le résultat sans faire de validation, c'est possible que le résultat soit vide
            resolve(resultat.rows);
        });
    });
};

Pokemons.trouverUnType = (type) => {
    return new Promise((resolve, reject) => {
        var requete = ""
        if (type == ""){
            requete = `SELECT id, nom, type_primaire, type_secondaire, pv, attaque, defense 
            FROM pokemond;`;
        }
        else{
            requete = `SELECT id, nom, type_primaire, type_secondaire, pv, attaque, defense 
            FROM pokemon WHERE type_primaire = $1;`;
        }

        const params = [type]
        

        sql.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                // S'il y a une erreur, je la retourne avec reject()
                reject(erreur);
            }
            // Sinon je retourne le résultat sans faire de validation, c'est possible que le résultat soit vide
            resolve(resultat.rows);
        });
    });

}

Pokemons.ajouterUnPokemon = (nom, type_primaire, type_secondaire, pv, attaque, defense) => {
    return new Promise((resolve, reject) => {

        const requete = `INSERT INTO pokemon (nom, type_primaire, type_secondaire, pv, attaque, defense) 
        VALUES ($1, $2, $3, $4, $5, $6); `;
        const params = [nom, type_primaire, type_secondaire, pv, attaque, defense]

        sql.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                // S'il y a une erreur, je la retourne avec reject()
                reject(erreur);
            }
            // Sinon je retourne le résultat sans faire de validation, c'est possible que le résultat soit vide
            resolve(resultat.rows);
        })
    });

}

Pokemons.modifierUnPokemon = (nom, type_primaire, type_secondaire, pv, attaque, defense, id) => {
    return new Promise((resolve, reject) => {

        const requete = `UPDATE pokemon SET nom = $1, type_primaire = $2, type_secondaire = $3, 
         pv = $4, attaque = $5, defense = $6 WHERE id = $7;`;
        const params = [nom, type_primaire, type_secondaire, pv, attaque, defense, parseInt(id)];

        sql.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                // S'il y a une erreur, je la retourne avec reject()
                reject(erreur);
            }
            // Sinon je retourne le résultat sans faire de validation, c'est possible que le résultat soit vide
            resolve(resultat.rows);
        })
    });
};

Pokemons.supprimerUnPokemon = (id) => {
    return new Promise((resolve, reject) => {

        const requete = `DELETE FROM pokemon WHERE id = $1;`;
        const params = [id];
        
        sql.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                // S'il y a une erreur, je la retourne avec reject()
                reject(erreur);
            }
            // Sinon je retourne le résultat sans faire de validation, c'est possible que le résultat soit vide
            resolve(resultat.rows);
        })
    });

}

module.exports = Pokemons;