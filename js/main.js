//Card object - template function
var card = function(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
};

//Deck object - template function
var deck = function(){
  this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  var cards = [];

  for(var i = 0; i< this.suits.length;i++)
  {
    for(var j = 0; j< this.names.length;j++){
      cards.push(new card(j+1, this.names[j], this.suits[i]));
      console.log(cards);
    }
  }
  return cards;
};

function shuffle (Arr){
  var input = Arr;
  for (var i = 0; i<input.length; i++)
  {
    //Storing the array element value to temp variable [temp]
    item = input[i];
    //selecting a random number from the given length of the array [X]
    var randomnumber = Math.floor(Math.random()*(i+1));
    //swapping the Elements
    input[i] = input[randomnumber];
    input[randomnumber] = item;

  }

  return input;
}

function compareVal ( a ,b)
{

  if ( a == b)
  {
    return true;
  }
  else
  {
    return false;
  }
}
//Creating a deck object
// Sobin Code

var myDeck = new deck();

window.onload = function()
{
  shuffle(myDeck);
  //Loop for all 52 cards in the deck
  for(var i = 0; i< myDeck.length; i++)
  {
    var vals = [];
    div = document.createElement('div');
    div.className = 'card';
    div.addEventListener('click', function(event)
    {
      this.querySelector(".number").style.display = "block";
      this.querySelector(".suit").style.display = "block";
      for(var counter= 0; counter<2;counter++)
        vals[counter] = this.querySelector(".number");
    });
    if (vals.length == 2)
    {
      var result = compareVal(vals[0],vals[1])
      if (result == true)
      {
        alert("Congrats..! you won.");
      }
      else {
        alert ("Better luch next time.. Next player..!");
      }
      vals =[];
    }

    var ascii_char;
    if(myDeck[i].suit =='Diamonds'){
      ascii_char = '&diams;';
    }
    else
    {
      ascii_char = '&'+myDeck[i].suit.toLowerCase()+';';
    }
    div.innerHTML ='<span class="number">'+ myDeck[i].name +'</span><span class="suit">' + ascii_char +'</span>';
    document.body.appendChild(div);
  }
};

/* Surya Code --
var myDeck = new deck();
window.onload = function(){
myDeck = shuffle(myDeck);
  //Loop for all 52 cards in the deck
  for(var i = 0; i< myDeck.length; i++)
  {
    div = document.createElement('div');
    div.className = 'card';
    var ascii_char;
    if(myDeck[i].suit =='Diamonds'){
      ascii_char = '&diams;';
    }
    else
    {
      ascii_char = '&'+myDeck[i].suit.toLowerCase()+';';
    }
    div.innerHTML ='<span class="number">'+ myDeck[i].name +'</span><span class="suit">' + ascii_char +'</span>';
    document.body.appendChild(div);
  }
}; */
