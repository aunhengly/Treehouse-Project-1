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
 * `getRandomNum` function
 ***/
function getRandomNum(randomNum) {
  var random = Math.floor(Math.random() * randomNum) + 1;
  return random;
}

/***
 * `randomBackground` function
 */
function randomBg() {
  var r = getRandomNum(256);
  var g = getRandomNum(256);
  var b = getRandomNum(256);
  var bgColor = (document.body.style.background = `rgb(${r},${g},${b})`);
  return bgColor;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  var randomNumber = quotes[getRandomNum(quotes.length)]; // quotes.length: so the random is flexible, it's depend on the length of the array.
  var divBox = document.getElementById('quote-box'); // variable 'divBox' is to go to 'div' with the ID 'quote-box', so we can replace the quote information that we want to replace on the screen.
  divBox.innerHTML = `
  <p class='quote'> ${randomNumber.quote}</p>
  <p class='source'>${randomNumber.source}
    <span class='citation'>${randomNumber.citation}</span>
    <span class='year'>${randomNumber.year}</span>
    <span class='tag'>${randomNumber.tag}</span>
  </p>
  `;
  randomBg();
}
printQuote();
setInterval(printQuote, 3000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
