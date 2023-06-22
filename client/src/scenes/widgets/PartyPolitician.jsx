import React from 'react';

class Politician {
  constructor(name, party, maxVotes, maxMoney) {
    this.name = name;
    this.party = party;
    this.maxVotes = maxVotes;
    this.maxMoney = maxMoney;
  }
}

class PartyPolitician extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      politicians: [],
      politicianName: '',
      party: '',
      maxVotes: 0,
      maxMoney: 0,
      maxVotesPolitician: '',
      maxMoneyPolitician: '',
    };
  }

  addPolitician = () => {
    const { politicians, politicianName, party, maxVotes, maxMoney } = this.state;
    const politician = new Politician(
      politicianName,
      party,
      parseInt(maxVotes),
      parseFloat(maxMoney)
    );
    this.setState({
      politicians: [...politicians, politician],
      politicianName: '',
      party: '',
      maxVotes: 0,
      maxMoney: 0,
    });
  };

  calculateMaxVotesPolitician = () => {
    const { politicians } = this.state;
    let maxVotesPolitician = '';
    let maxVotes = 0;
    politicians.forEach((politician) => {
      if (politician.maxVotes > maxVotes) {
        maxVotes = politician.maxVotes;
        maxVotesPolitician = politician.name;
      }
    });
    this.setState({ maxVotesPolitician });
  };

  calculateMaxMoneyPolitician = () => {
    const { politicians } = this.state;
    let maxMoneyPolitician = '';
    let maxMoney = 0;
    politicians.forEach((politician) => {
      if (politician.maxMoney > maxMoney) {
        maxMoney = politician.maxMoney;
        maxMoneyPolitician = politician.name;
      }
    });
    this.setState({ maxMoneyPolitician });
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      politicians,
      politicianName,
      party,
      maxVotes,
      maxMoney,
      maxVotesPolitician,
      maxMoneyPolitician,
    } = this.state;

    return (
      <div>
        <h2>Party Politician</h2>

        <div>
          <label>Politician Name:</label>
          <input
            type="text"
            name="politicianName"
            value={politicianName}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Party:</label>
          <input
            type="text"
            name="party"
            value={party}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Max Votes:</label>
          <input
            type="number"
            name="maxVotes"
            value={maxVotes}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label>Max Money:</label>
          <input
            type="number"
            name="maxMoney"
            value={maxMoney}
            onChange={this.handleInputChange}
          />
        </div>

        <button onClick={this.addPolitician}>Add Politician</button>

        <ul>
          {politicians.map((politician, index) => (
            <li key={index}>
              {politician.name} - Party: {politician.party}
            </li>
          ))}
        </ul>

        <button onClick={this.calculateMaxVotesPolitician}>Calculate Max Votes Politician</button>
        <p>Max Votes Politician: {maxVotesPolitician}</p>

        <button onClick={this.calculateMaxMoneyPolitician}>Calculate Max Money Politician</button>
        <p>Max Money Politician: {maxMoneyPolitician}</p>
      </div>
    );
  }
}

export default PartyPolitician;
