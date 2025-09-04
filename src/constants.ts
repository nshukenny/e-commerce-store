import type { MyDataItem } from './store/sampleFeature/slice';

export const MY_DATA_CONSTANT: MyDataItem[] = [
  {
    id: 1,
    name: 'Item',
  },
  {
    id: 2,
    name: 'Item',
  },
  {
    id: 3,
    name: 'Item',
  },
] as const;
