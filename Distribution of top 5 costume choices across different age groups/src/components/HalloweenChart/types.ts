export interface CostumeData {
  age: string;
  'Movie Character': number;
  Cat: number;
  Witch: number;
  Ghost: number;
  Vampire: number;
}

export interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    fill: string;
  }>;
  label?: string;
}