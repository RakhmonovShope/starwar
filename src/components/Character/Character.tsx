import React from 'react';

import classes from './Character.module.scss';

interface IProps {
  id: number;
  name: string;
  gender: string;
  height: string;
  mass: string;
  onSelect: (id: number) => void;
}

const Character: React.FC<IProps> = ({
  id,
  name,
  gender,
  height,
  mass,
  onSelect,
}) => {
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  return (
    <div className={classes.wrapper} onClick={() => onSelect(id)}>
      <div className={classes.image}>
        <img
          src={imageUrl}
          alt={name}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://starwars-visualguide.com/assets/img/placeholder.jpg';
          }}
        />
      </div>
      <div className={classes.info}>
        <h3>{name}</h3>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height} cm
        </p>
        <p>
          <strong>Mass:</strong> {mass} kg
        </p>
      </div>
    </div>
  );
};

export default Character;
