import React from 'react';
import '../App.css';
import Card from '../components/cards';

function Team() {
  return (
    <div className="team">
      <div className="team__heading">
        <h1>Our Team</h1>
      </div>
      {/* all teams */}
      <Card />
    </div>
  );
}

export default Team;
