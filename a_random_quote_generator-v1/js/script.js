/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 * Sources of the quotes: https://www.google.com/search?q=top+ten+quotes+from+famous+people&rlz=1C5CHFA_enKH585KH585&biw=1280&bih=572&sxsrf=ALeKk00eLT7W0yeCD30NZCKpqkMaV8seQw:1587181250571&tbm=isch&source=iu&ictx=1&fir=X_ZkT-w0D8vZRM%253A%252CxpqdknO0dUZc-M%252C_&vet=1&usg=AI4_-kRzIpeC2VeDkzuuAmpRT810hiIPjw&sa=X&ved=2ahUKEwiGqYn1hvHoAhUiLX0KHeNIBxUQ_h0wAHoECAoQBA#imgrc=4nHmd_BzfAuJfM
 ***/
var quotes = [
  {
    quote:
      'The difference between genius and stupidity is that genius has limits',
    source: 'Albert Einstein',
    citation: 'google',
    year: 2020,
    tag: 'science',
  },
  {
    quote: 'Be the change you want to see in the world',
    source: 'Mahatma Gandhi',
    citation: 'google',
    year: 2020,
    tag: 'leadership',
  },
  {
    quote:
      'Success is a lousy teacher. It seduces smart people into thinking they can not lose.',
    source: 'Bill Gates',
    citation: 'google',
    year: 2020,
    tag: 'leadership',
  },
  {
    quote: 'You can do anything if you have enthusiasm',
    source: 'Henry Ford',
    citation: 'google',
    year: 2020,
    tag: 'leadership',
  },
  {
    quote: 'The only way to do great work, is to love what you do',
    source: 'Steve Jobs',
    citation: 'google',
    year: 2020,
    tag: 'technology',
  },
  {
    quote: 'Efforts and courage are not enough without purpose and direction',
    source: 'JFK',
    citation: 'google',
    year: 2020,
    tag: 'leadership',
  },
  {
    quote: 'I never lose. I either win or learn',
    source: 'Nelson Mandela',
    citation: 'google',
    year: 2020,
    tag: 'business',
  },
  {
    quote: 'Nothing in life that is worth anything is easy',
    source: 'Barack Obama',
    citation: 'google',
    year: 2020,
    tag: 'business',
  },
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(quoteNumber) {
  var randomQuote = Math.floor(Math.random() * quoteNumber) + 1;
  return randomQuote;
}

/***
 * `printQuote` function
 ***/
function printQuote(message) {
  var changeQuote = document.getElementById('quote-box');
  changeQuote.innerHTML = message;
}

function showRandomQuote(show) {
  var quoteOutPut = `<p class=quote>${show.quote} </p>
  <p class='source'> ${show.source} <span class='citation'>${show.citation}</span> <span class= 'year'>${show.year}</span></p>
  `;
  return quoteOutPut;
}

var message;
var randomNumber = getRandomQuote(quotes.length);
console.log(randomNumber);
message = showRandomQuote(quotes[randomNumber]);
printQuote(message);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);