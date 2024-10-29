export const costumeData = [
  { age: "Under 18", "Movie Character": 4, Cat: 3, Witch: 2, Ghost: 2, Vampire: 1 },
  { age: "18-24", "Movie Character": 35, Cat: 22, Witch: 18, Ghost: 15, Vampire: 12 },
  { age: "25-34", "Movie Character": 40, Cat: 28, Witch: 20, Ghost: 18, Vampire: 15 },
  { age: "35-44", "Movie Character": 30, Cat: 20, Witch: 25, Ghost: 18, Vampire: 15 },
  { age: "45-54", "Movie Character": 25, Cat: 15, Witch: 22, Ghost: 18, Vampire: 12 },
  { age: "55+", "Movie Character": 20, Cat: 12, Witch: 18, Ghost: 15, Vampire: 10 },
];

export const costumes = ["Movie Character", "Cat", "Witch", "Ghost", "Vampire"] as const;

export const colors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export const chartConfig = costumes.reduce((acc, costume, index) => ({
  ...acc,
  [costume]: { label: costume, color: colors[index] },
}), {});