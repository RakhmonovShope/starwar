export declare namespace IApi {
  export namespace List {
    export interface Response {
      results: Species[];
    }

    export interface Params {
      page?: number;
      search?: string;
    }
  }

  export namespace Single {
    export interface Response {
      data: Species;
    }
  }

  export interface Species {
    id: string;
  }
}

export declare namespace IEntity {
  export interface Species {
    name: string;
    classification: string;
    designation: string;
    averageHeight: string;
    averageLifespan: string;
    eyeColors: string;
    hairColors: string;
    skinColors: string;
    language: string;
    homeworld: string;
    people: string[];
    films: string[];
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
    items: IEntity.Species[];
    meta: IEntity.Meta;
  }

  export interface Single {
    item: IEntity.Species;
  }
}
