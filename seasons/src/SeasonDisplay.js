import './SeasonDisplay.css';
import React from 'react';

class SeasonDisplay extends React.Component {
  sessionConfig = {
    summer: {
      text: 'lets, hit the beach!',
      iconName: 'sun',
    },
    winter: {
      text: 'butt, it is chilly',
      iconName: 'snowflake',
    },
  };

  getSeason(lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
    } else {
      return lat > 0 ? 'winter' : 'summer';
    }
  }

  render() {
    const season = this.getSeason(this.props.lat, new Date().getMonth());
    const { text, iconName } = this.sessionConfig[season];

    return (
      <div className={`session-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1> {text} </h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
}

export default SeasonDisplay;
