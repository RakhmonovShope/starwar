import get from 'lodash/get';
import * as Types from './types';

export const Vehicle = (item?: any): Types.IEntity.Vehicle => {
  return {
    name: get(item, 'name', ''),
    model: get(item, 'model', ''),
    vehicleClass: get(item, 'vehicle_class', ''),
    manufacturer: get(item, 'manufacturer', ''),
    length: get(item, 'length', ''),
    costInCredits: get(item, 'cost_in_credits', ''),
    crew: get(item, 'crew', ''),
    passengers: get(item, 'passengers', ''),
    maxAtmospheringSpeed: get(item, 'max_atmosphering_speed', ''),
    cargoCapacity: get(item, 'cargo_capacity', ''),
    consumables: get(item, 'consumables', ''),
    films: get(item, 'films', []),
    pilots: get(item, 'pilots', []),
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
