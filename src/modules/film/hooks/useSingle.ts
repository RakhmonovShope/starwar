import { useQuery } from 'react-query';

import * as Api from '../api';
import * as Constants from '../constants';
import * as Mappers from '../mappers';
import * as Types from '../types';

interface IProps {
  id: string;
}

const useSingle = ({ id }: IProps) => {
  const initialData = { item: Mappers.Film() } as Types.IQuery.Single;

  const { data = initialData, ...args } = useQuery<
    Types.IQuery.Single,
    string,
    Types.IQuery.Single
  >(
    [Constants.SINGLE, id],
    async () => {
      const { data } = await Api.Single({ id });

      const item = Mappers.Film(data && data.data);

      return {
        item,
      };
    },
    {
      initialData,
      enabled: !!id,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );

  return { ...args, ...data };
};

export default useSingle;
