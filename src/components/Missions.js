import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missionsContainer">
        <Title headline="Missões" />

        <div className="todasAsMissoes">
          {
            missions
              .sort((a, b) => a.year - b.year)
              .map((missao) => {
                const { name, year, country, destination } = missao;
                return (<MissionCard
                  name={ name }
                  year={ year }
                  country={ country }
                  destination={ destination }
                  key={ name }
                />);
              })
          }
        </div>
      </div>
    );
  }
}

export default Missions;
