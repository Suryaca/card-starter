//Card- template function
var card = function(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
};

var heart2 = new card(2,'2','Hearts');

//Deck - template function - just moulds
var deck = function(){
  this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  var cards = [];
  //52 loops = 4 *13
  for(var i = 0; i< this.suits.length;i++)
  {
    for(var j = 0; j< this.names.length;j++){
      var cardObject = new card(j+1, this.names[j], this.suits[i]);
      cards.push(cardObject);
    }

  }
  //deck of 52 card objects
  return cards;
};

var player = function(name){
  this.name = name;
  this.score = 0;
}

var player1 = new player("prath");
var player2 = new player("Surya");

var shuffle = function(deck){
  for(var j, x, i = deck.length; i; j = parseInt(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);

  return deck;
};

function setPlayer(playerOne , playerTwo)
{
  var temp = player1;
  player2 = player1;
  player1 = temp;
};

cardCounter =0;
currentPlayer = null;

//Creating a deck object
var myDeck = new deck();

window.onload = function(){

  //shuffle(myDeck);
  //Loop for all 52 cards in the deck
  currentPlayer = player1;
  for(var i = 0; i< myDeck.length; i++)
  {
    div = document.createElement('div');
    div.className = 'card';
    div.addEventListener('click', function(event){
      if(cardCounter==2)
      {
        var flippedCards = document.getElementsByClassName("show");
        for(var i =flippedCards.length-1; i>-1;i--){
          flippedCards[i].classList.remove("show");
        }
        cardCounter =1;
      }
      else if(cardCounter==1){
        var currentCardValue = this.querySelector(".number").innerHTML;
        var previousCardValue = document.getElementsByClassName("show")[0].innerHTML;
        if(currentCardValue==previousCardValue)
        {
          console.log(currentPlayer);
          currentPlayer = currentPlayer;
          player1.score+=10;
          console.log(player1.score);
          //document.getElementById("player1").querySelector(".score").innerHTML=player1.score;
        }
        else
        //playerCounter++;
        cardCounter++;
        currentPlayer = setPlayer(player1 , player2);
        console.console.log(currentPlayer);
      }
      else
        cardCounter++;
      this.querySelector(".number").classList.add("show");
      this.querySelector(".suit").classList.add("show");
    });

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

  scoreDiv = document.createElement('div');
  scoreDiv.className ='score';
  scoreDiv.innerHTML='<span id="player1">' + player1.name +'<br/>'+player1.score+'</span>'+'<span id="player2">' + player2.name +'<br/>'+player2.score+'</span>';
  document.body.appendChild(scoreDiv);

};
