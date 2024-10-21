import get from 'lodash/get';
import * as Types from './types';

export const Film = (item?: any): Types.IEntity.Film => {
  return {
    title: get(item, 'title', ''),
    episodeId: get(item, 'episode_id', 0),
    openingCrawl: get(item, 'opening_crawl', ''),
    director: get(item, 'director', ''),
    producer: get(item, 'producer', ''),
    releaseDate: get(item, 'release_date', ''),
    species: get(item, 'species', []),
    starships: get(item, 'starships', []),
    vehicles: get(item, 'vehicles', []),
    characters: get(item, 'characters', []),
    planets: get(item, 'planets', []),
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
