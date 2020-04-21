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
function getRandomQuote() {
  // assign randomQ to the random number between 0 to the last index of quotes array.
  let randomQ = Math.floor(Math.random() * quotes.length);
  // return a random quote as an object from quotes array.
  return quotes[randomQ];
}

/***
 * `randomBg` function: for random color
 */
function randomBg() {
  // assign randomRGB to random function that have value from 0 -256.
  const randomRGB = () => {
    return Math.floor(Math.random() * 256);
  };
  // assign random value for r, g, b from 0 - 256.
  let r = randomRGB();
  let g = randomRGB();
  let b = randomRGB();
  //assign bgColor to change background color with random value from r,g,b.
  let bgColor = (document.body.style.background = `rgb(${r},${g},${b})`);
  // return the value of bgColor once the function randomBg() is called.
  return bgColor;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  //assign randomQuote to get random quote from function getRandomQuote().
  var randomQuote = getRandomQuote();
  // assign replacePara to paragraph, span that we want to replace by randomQuote.
  var replacePara = `<p class ='quote'> ${randomQuote.quote};
  <p class='source'>${randomQuote.source}`;
  //check for citation and add to replacePara if it found.
  if (randomQuote.citation) {
    replacePara += `<span class='citation'>${randomQuote.citation}</span>`;
  }
  //check for year and add to replacePara if it found.
  if (randomQuote.year) {
    replacePara += `<span class='year'>${randomQuote.year}</span>`;
  }
  //check for tag and add to replacePara if it found.
  if (randomQuote.tag) {
    replacePara += `<span class='tag'>${randomQuote.tag}</span>`;
  }
  //add closing 'p' tag to replacePara above.
  replacePara += `</p>`;
  //Assigning the replacePara data/information into div that have ID 'quote-box'.
  document.getElementById('quote-box').innerHTML = replacePara;
  //call function randDomBg() to change background color.
  randomBg();
}
//call function printQuote() to print random quote and put on the screen.
printQuote();
//change background color every 3 second.
setInterval(printQuote, 3000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
