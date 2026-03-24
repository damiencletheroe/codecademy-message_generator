// store a set of quotes, each as an object containing quote and author key:values
const quotes = {
   0: {quote: "Never in the field of human conflict was so much owed by so many to so few.", author: 'Winston Churchill'},
   1: {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: 'Winston Churchill'},
   2: {quote: "Ours is a world of nuclear giants and ethical infants. We know more about war than we know about peace, more about killing than we know about living.", author: 'General Omar Bradley'},
   3: {quote: "We must be prepared to make heroic sacrifices for the cause of peace that we make ungrudgingly for the cause of war. There is no task that is more important or closer to my heart.", author: 'Albert Einstein'},
   4: {quote: "The death of one man is a tragedy. The death of millions is a statistic.", author: 'Joseph Stalin'},
   5: {quote: "Older men declare war. But it is the youth that must fight and die.", author: 'Herbert Hoover'},
   6: {quote: "There are no atheists in foxholes, this isn't an argument against atheism, it's an argument against foxholes.", author: 'James Morrow'},
   7: {quote: "It is better to die on your feet than to live on your knees!", author: 'Emiliano Zapata'},
   8: {quote: "In war, truth is the first casualty.", author: 'Aeschylus'},
   9: {quote: "Mankind must put an end to war, or war will put an end to mankind.", author: 'John F. Kennedy'},
   10: {quote: "War does not determine who is right, only who is left.", author: 'Bertrand Russell'},
   11: {qutoe: "Whoever stands by a just cause cannot possibly be called a terrorist.", author: 'Yassar Arafat'},
   12: {quote: "All that is necessary for evil to succeed is for good men to do nothing.", author: 'Edmund Burke'},
   13: {quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.", author: 'Albert Einstein'},
   14: {quote: "Nationalism is an infantile disease. It is the measles of mankind.", author: 'Albert Einstein'},
   15: {quote: "The nation is divided, half patriots and half traitors, and no man can tell which from which.", author: 'Mark Twain'},
   16: {quote: "Patriotism is your conviction that this country is superior to all others because you were born in it.", author: 'George Bernard Shaw'},
   17: {quote: "Patriotism is an arbitrary veneration of real estate above principles.", author: 'George Jean Nathan'}
};

// generate a random number determined by the number of stored quotes
const randomNumber = Math.floor(Math.random() * Object.keys(quotes).length);

// select a quote using the random number
const selectedQuote = (quotes[randomNumber]);

// print selected quote to the console
console.log(`${selectedQuote['quote']}
- ${selectedQuote['author']}`);