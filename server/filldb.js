const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

// server > filldata.js
const faker = require('faker');

const database = {
  sanitas: []
};




for (let i = 1; i <= 4000; i++) {
  database.sanitas.push({
    id: i,
    photo: `https://source.unsplash.com/collection/${i}/480x480`,
    text: lorem.generateSentences(5)
  });
}

console.log(JSON.stringify(database));