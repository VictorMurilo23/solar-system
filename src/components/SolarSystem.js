import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="PLANETAS" />
        <div className="planetsContainer">
          {
            planets.map((planet) => {
              const { name, image } = planet;
              return (<PlanetCard
                planetName={ name }
                planetImage={ image }
                key={ name }
              />);
            })
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
