//Card- template function
var card = function(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
};

var shuffle = function(deck){
  for(var j, x, i = deck.length; i; j = parseInt(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);

  return deck;
};
