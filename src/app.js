//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var manager=[managerName,managerAge,currentTeam,trophiesWon];
  return manager
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation([defender,midfield,forward]){
  if(defender===undefined || midfield===undefined){
    return null
  }else{
  var position ={
    defender:defender,
    midfield:midfield,
    forward:forward
  }
  return position
}
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var debut=players.filter(function(player){
    return player.debut ==year
  })
  return debut
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var position= players.filter(function(player) {
    return player.position==position
  })
  return position  
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardname){
  let arraward=[]
  for(i=0;i<players.length;i++){
    for(j=0;j<players[i].awards.length;j++){

      if(players[i].awards[j].name== awardname){
        arraward.push(players[i])
      }
    }
  }

  return arraward
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(award, noOfTimes) {
  let emparr = []
  players.some((player) => {
    let count = 0
    player.awards.some((playerAward)=>{
      if (playerAward.name === award){
        count += 1
      }
    });
    if (count === parseInt(noOfTimes)) emparr.push(player)
  })
  return emparr
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
  var data=filterByAward(awardName)
  var filter= data.filter(function(player){
     return player.country ==country
    })
  return filter
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var filter=players.filter(function(players){
    return players.age<age && players.team==team && players.awards.length>=noOfAwards
  })
  return filter
}
//Progression 9 - Sort players in descending order of their age
function sortAge(){
  for (i=0;i<players.length;i++){
    for (j=i+1;j<players.length; j++){
      if (players[i].age<players[j].age) {
        temp=players[i];
        players[i]=players[j];
        players[j]=temp;
      }
    }
  }
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function sortPlayersSortAwards(){
  count=0;
  filteredPlayers=[];
  for(i=0; i< players.length; i++) {
    if(players[i].team==team) {
      filteredPlayers[count++]=players[i];
    }
  }
  for(i=0; i<filteredPlayers.length; i++) {
    for(j=i + 1; j<filteredPlayers.length; j++) {
      if(filteredPlayers[i].awards.length<filteredPlayers[j].awards.length) {
        temp=filteredPlayers[i];
        filteredPlayers[i]=filteredPlayers[j];
        filteredPlayers[j]=temp;
      }
    }
  }

  
  return filteredPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(award,count,country){
  arr=players.filter((player)=>{
    for (let playerAward of player.awards){
      if(playerAward.name===award){
        awardCount++
      }
    }
    return awardCount===parseInt(count)&& player.country===country
  })
  return arr.sort((a,b)=>a.name.localeCompare(b.name))
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  let arr = players.filter((player) => player.age >= parseInt(age)).map((player) => (
    {...player,awards: [...player.awards].sort((a, b) => b.year - a.year),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return arr;
}