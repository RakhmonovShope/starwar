import React from 'react';

import classes from './Character.module.scss';
import { IEntity } from '../../modules/character/types.ts';

interface IProps {
  character: IEntity.Person;
  onSelect: (character: IEntity.Person) => void;
}

const Character: React.FC<IProps> = ({ character, onSelect }) => {
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`;

  return (
    <div className={classes.wrapper} onClick={() => onSelect(character)}>
      <img
        src={imageUrl}
        alt={character.name}
        className={classes.characterImage}
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://starwars-visualguide.com/assets/img/placeholder.jpg';
        }}
      />
      <div className={classes.info}>
        <h3>{character.name}</h3>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <p>
          <strong>Height:</strong> {character.height} cm
        </p>
        <p>
          <strong>Mass:</strong> {character.mass} kg
        </p>
      </div>
    </div>
  );
};

export default Character;
