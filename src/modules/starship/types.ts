export declare namespace IApi {
  export namespace List {
    export interface Response {
      results: Starship[];
    }

    export interface Params {
      page?: number;
      search?: string;
    }
  }

  export namespace Single {
    export interface Response {
      data: Starship;
    }
  }

  export interface Starship {
    id: string;
  }
}

export declare namespace IEntity {
  export interface Starship {
    name: string;
    model: string;
    starshipClass: string;
    manufacturer: string;
    costInCredits: string;
    length: string;
    crew: string;
    passengers: string;
    maxAtmospheringSpeed: string;
    hyperdriveRating: string;
    MGLT: string;
    cargoCapacity: string;
    consumables: string;
    films: string[];
    pilots: string[];
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
    items: IEntity.Starship[];
    meta: IEntity.Meta;
  }

  export interface Single {
    item: IEntity.Starship;
  }
}
