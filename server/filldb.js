// server > filldata.js
const faker = require('faker');

const database = {
  sanitas: []
};

for (let i = 1; i <= 4000; i++) {
  database.sanitas.push({
    id: i,
    photo: `https://source.unsplash.com/collection/${i}/480x480`,
    text: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  });
}

console.log(JSON.stringify(database));