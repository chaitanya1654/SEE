const prompt = require('prompt-sync')();

class Politician {
  constructor(name, party, votes, money) {
    this.name = name;
    this.party = party;
    this.votes = votes;
    this.money = money;
  }
}

class PoliticalParty {
  constructor() {
    this.politicians = [];
  }

  addPolitician(politician) {
    this.politicians.push(politician);
  }

  calculateMaxVotes() {
    let maxVotes = 0;
    let maxVotesPolitician = null;
    for (let politician of this.politicians) {
      if (politician.votes > maxVotes) {
        maxVotes = politician.votes;
        maxVotesPolitician = politician;
      }
    }
    return maxVotesPolitician;
  }

  calculateMaxMoney() {
    let maxMoney = 0;
    let maxMoneyPolitician = null;
    for (let politician of this.politicians) {
      if (politician.money > maxMoney) {
        maxMoney = politician.money;
        maxMoneyPolitician = politician;
      }
    }
    return maxMoneyPolitician;
  }
}

function main() {
  const politicalParty = new PoliticalParty();

  const numPoliticians = parseInt(prompt("Enter the number of politicians:"));

  for (let i = 0; i < numPoliticians; i++) {
    const politicianName = prompt(`Enter the name of politician ${i + 1}:`);
    const politicianParty = prompt(`Enter the party of politician ${i + 1}:`);
    const politicianVotes = parseInt(prompt(`Enter the votes for politician ${i + 1}:`));
    const politicianMoney = parseInt(prompt(`Enter the money for politician ${i + 1}:`));
    const politician = new Politician(politicianName, politicianParty, politicianVotes, politicianMoney);
    politicalParty.addPolitician(politician);
  }

  const maxVotesPolitician = politicalParty.calculateMaxVotes();
  console.log("Politician with maximum votes:", maxVotesPolitician);

  const maxMoneyPolitician = politicalParty.calculateMaxMoney();
  console.log("Politician with maximum money:", maxMoneyPolitician);
}

main();
