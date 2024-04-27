export type outputLabel = {
  id: string;
  type: string;
  label: string;
  labels: {
    id: string;
    label: string;
    value: number;
    unit: string;
  }[];
};

export type Interval =
  | {
      label: string;
      value: number;
    }
  | {
      label: string;
      values: { value: number }[];
    };

export type intervals = {
  type: string;
  values: Interval[];
}[];
