export declare namespace IApi {
  export namespace List {
    export interface Response {
      results: Vehicle[];
    }

    export interface Params {
      page?: number;
      search?: string;
    }
  }

  export namespace Single {
    export interface Response {
      data: Vehicle;
    }
  }

  export interface Vehicle {
    id: string;
  }
}

export declare namespace IEntity {
  export interface Vehicle {
    name: string;
    model: string;
    vehicleClass: string;
    manufacturer: string;
    length: string;
    costInCredits: string;
    crew: string;
    passengers: string;
    maxAtmospheringSpeed: string;
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
    items: IEntity.Vehicle[];
    meta: IEntity.Meta;
  }

  export interface Single {
    item: IEntity.Vehicle;
  }
}
