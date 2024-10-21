import { useQuery } from 'react-query';

import * as Api from '../api';
import * as Constants from '../constants';
import * as Mappers from '../mappers';
import * as Types from '../types';
import get from 'lodash/get';

const useList = ({ params }: { params: Types.IApi.List.Params }) => {
  const initialData = { items: [], meta: Mappers.Meta() } as Types.IQuery.List;

  const defaultParams = {
    page: params.page ? params.page : 1,
    search: params.search ? params.search : '',
  };

  const { data = initialData, ...args } = useQuery<
    Types.IQuery.List,
    string,
    Types.IQuery.List
  >(
    [Constants.LIST, defaultParams],
    async () => {
      const { data } = await Api.List({ params: defaultParams });

      const items = (get(data, 'results') || []).map((item: any) =>
        Mappers.Person(item),
      );

      const meta = Mappers.Meta(data);

      return { items, meta };
    },
    { initialData, keepPreviousData: true, refetchOnWindowFocus: false },
  );

  return { ...data, ...args };
};

export default useList;
