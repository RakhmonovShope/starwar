import get from 'lodash/get';
import * as Types from './types';

export const Planet = (item?: any): Types.IEntity.Planet => {
  return {
    name: get(item, 'name', ''),
    diameter: get(item, 'diameter', ''),
    rotationPeriod: get(item, 'rotation_period', ''),
    orbitalPeriod: get(item, 'orbital_period', ''),
    gravity: get(item, 'gravity', ''),
    population: get(item, 'population', ''),
    climate: get(item, 'climate', ''),
    terrain: get(item, 'terrain', ''),
    surfaceWater: get(item, 'surface_water', ''),
    residents: get(item, 'residents', []),
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
