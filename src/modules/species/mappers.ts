import get from 'lodash/get';
import * as Types from './types';

export const Species = (item?: any): Types.IEntity.Species => {
  return {
    name: get(item, 'name', ''),
    classification: get(item, 'classification', ''),
    designation: get(item, 'designation', ''),
    averageHeight: get(item, 'average_height', ''),
    averageLifespan: get(item, 'average_lifespan', ''),
    eyeColors: get(item, 'eye_colors', ''),
    hairColors: get(item, 'hair_colors', ''),
    skinColors: get(item, 'skin_colors', ''),
    language: get(item, 'language', ''),
    homeworld: get(item, 'homeworld', ''),
    people: get(item, 'people', []),
    films: get(item, 'films', []),
    url: get(item, 'url', ''),
    created: get(item, 'created', ''),
    edited: get(item, 'edited', ''),
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
