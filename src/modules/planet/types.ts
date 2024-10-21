export declare namespace IApi {
  export namespace List {
    export interface Response {
      results: Planet[];
    }

    export interface Params {
      page?: number;
      search?: string;
    }
  }

  export namespace Single {
    export interface Response {
      data: Planet;
    }
  }

  export interface Planet {
    id: string;
  }
}

export declare namespace IEntity {
  export interface Planet {
    name: string;
    diameter: string;
    rotationPeriod: string;
    orbitalPeriod: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surfaceWater: string;
    residents: string[];
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
    items: IEntity.Planet[];
    meta: IEntity.Meta;
  }

  export interface Single {
    item: IEntity.Planet;
  }
}
