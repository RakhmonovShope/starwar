export declare namespace IApi {
  export namespace List {
    export interface Response {
      results: Film[];
    }

    export interface Params {
      page?: number;
      search?: string;
      ids?: number[];
    }
  }

  export namespace Single {
    export interface Response {
      data: Film;
    }
  }

  export interface Film {
    id: string;
  }
}

export declare namespace IEntity {
  export interface Film {
    title: string;
    episodeId: number;
    openingCrawl: string;
    director: string;
    producer: string;
    releaseDate: string;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
    url: string;
    created: string;
    edited: string;
  }

  export interface Meta {
    hasNext: boolean;
    hasPrevious: boolean;
    totalPages: number;
    totalItems: string;
  }
}

export declare namespace IQuery {
  export interface List {
    items: IEntity.Film[];
    meta: IEntity.Meta;
  }

  export interface Single {
    item: IEntity.Film;
  }
}
