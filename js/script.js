







function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * (quotes.length));
  return quotes[randomQuote];
}
//prints quotes returned from getRandomQuote function 
function printQuote() {
  var newQuote = getRandomQuote();
  var quoteDetails = '<p class="quote">' + newQuote.quote + '</p>';
  quoteDetails += '<p class="source">'+ newQuote.source +
   '<span class="citation">' + newQuote.citation + '</span>' +
   '<span class="year">' + newQuote.year + '</span>' + '</p>';
  document.getElementById('quote-box').innerHTML = quoteDetails;
}
function intervals(){     //refreshes quote and background color every 15 seconds
  var quote_int = setInterval(printQuote, 15000);
  var color_int = setInterval(setBackgroundColor, 15000);
}

intervals();


//generaetes and returns color value
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
  }
//sets returned hexadecimal value as background color
  function setBackgroundColor() {
    var backgroundColor = getRandomColor();
      document.body.style.background = backgroundColor;
  }
  setBackgroundColor();

  // when user clicks anywhere on the button, the "printQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
