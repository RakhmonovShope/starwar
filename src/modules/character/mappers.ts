import get from 'lodash/get';
import * as Types from './types';

export const Person = (item?: any): Types.IEntity.Person => {
  return {
    birthYear: get(item, 'birth_year', ''),
    created: get(item, 'created', ''),
    edited: get(item, 'edited', ''),
    eyeColor: get(item, 'eye_color', ''),
    films: get(item, 'films', []),
    gender: get(item, 'gender', ''),
    hairColor: get(item, 'hair_color', ''),
    height: get(item, 'height', ''),
    homeworld: get(item, 'homeworld', 0),
    id: get(item, 'id', 0),
    mass: get(item, 'mass', ''),
    name: get(item, 'name', ''),
    skinColor: get(item, 'skin_color', ''),
    species: get(item, 'species', []),
    starships: get(item, 'starships', []),
    url: get(item, 'url', ''),
    vehicles: get(item, 'vehicles', []),
  };
};

export const Meta = (item?: any): Types.IEntity.Meta => {
  return {
    hasNext: !!get(item, 'next', false),
    hasPrevious: !!get(item, 'previous', false),
    totalItems: get(item, 'count', 0),
    totalPages: Math.ceil(get(item, 'count', 0) / 10),
  };
};
