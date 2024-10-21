export declare namespace IApi {
  export namespace List {
    export interface Response {
      results: Person[];
    }

    export interface Params {
      page?: number;
      search?: string;
    }
  }

  export namespace Single {
    export interface Response {
      data: Person;
    }
  }

  export interface Person {
    id: string;
  }
}

export declare namespace IEntity {
  export interface Person {
    birthYear: string;
    created: string;
    edited: string;
    eyeColor: string;
    films: number[];
    gender: string;
    hairColor: string;
    height: string;
    homeworld: number;
    id: number;
    mass: string;
    name: string;
    skinColor: string;
    species: number[];
    starships: number[];
    url: string;
    vehicles: number[];
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
    items: IEntity.Person[];
    meta: IEntity.Meta;
  }

  export interface Single {
    item: IEntity.Person;
  }
}
