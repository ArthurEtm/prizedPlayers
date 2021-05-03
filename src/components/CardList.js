import React from 'react';
import Card from './Card';

const CardList = ({ players }) => {
  return (
    <div>
      {
        players.map((user, i) => {
          return (         
            <Card

              key={i}
              id={players[i].id}
              name={players[i].name}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;