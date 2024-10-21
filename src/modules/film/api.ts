import { AxiosPromise } from 'axios';

import config from '../../config';

import { http } from '../../services';

import * as Types from './types';

export const List = ({
  params,
}: {
  params: Types.IApi.List.Params;
}): AxiosPromise<any> =>
  http.request.get(`${config.baseUrl}/people`, {
    params: {
      page: params.page ? params.page : 1,
      name: params.search ? params.search : undefined,
    },
  });

export const Single = ({
  id,
}: {
  id: string;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`${config.baseUrl}/people/${id}`);
