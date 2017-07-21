

var game = {
  players: [],
  addPlayer: function(player){
    this.players.push(player)
  }
};

function play(players){
  var winner = 0;
  var score = 0;
  var total = 0;
  for (var i = 0; i < players.length; i++){
    console.log(players[i].name, players[i].hand)
    console.log("base exp: ", players[i].hand[0].base_experience)
    console.log("base exp: ", players[i].hand[0].stats[2].base_stat)
    console.log("base exp: ", players[i].hand[0].stats[0].base_stat)
    total = players[i].hand[0].base_experience * players[i].hand[0].stats[2].base_stat *
    players[i].hand[0].stats[0].base_stat;
    console.log("total pts = ", total)
    if (total > score){
      score = total;
      winner = i
    }
  }
  console.log("the winner is ", players[winner].name, "!")
  return winner
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};
