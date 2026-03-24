// arrays of adjectives, nouns, and verbs
const adjectives = ['brilliant', 'exhausting', 'chaotic', 'relaxing', 'stressful', 'productive', 'dreary', 'overwhelming', 'peaceful', 'frustrating', 'eventful', 'sluggish', 'hectic', 'delightful', 'mediocre']

const nouns = ['briefcase', 'hedgehog', 'lamppost', 'trumpet', 'sandwich', 'elevator', 'penguin', 'stapler', 'thundercloud', 'bicycle', 'librarian', 'volcano', 'teapot', 'escalator', 'hammock']

const verbs = ['stumble', 'juggle', 'evaporate', 'wobble', 'screech', 'hibernate', 'explode', 'shuffle', 'malfunction', 'gallop', 'dissolve', 'sneeze', 'levitate', 'collide', 'yodel']

// generate a random adjective noun and verb
const adjectiveNumber = Math.floor(Math.random() * adjectives.length);
const nounNumber = Math.floor(Math.random() * nouns.length);
const verbNumber = Math.floor(Math.random() * verbs.length);

const adj = adjectives[adjectiveNumber];
const noun = nouns[nounNumber];
const verb = verbs[verbNumber];

// function to find correct article
function getArticle(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // check if the first letter of the word is a vowel - ternary operation - if yes, return "an" else return "a"
    return vowels.includes(word[0].toLowerCase()) ? 'an' : 'a';
}

// generate and print the quuote
console.log(`Be prepared for ${getArticle(adj)} ${adj} day, where every ${noun} you encounter will ${verb} at the worst possible moment.`)