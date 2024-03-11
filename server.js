const express = require ('express');
// Importation du module swagger-ui-express

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/pokemons', require('./src/routes/pokemons'));

app.listen(PORT, () =>{
    console.log('Serveur partie')
});