import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { CustomTooltip } from './CustomTooltip';
import { costumeData, costumes, chartConfig } from './data';

export function HalloweenChart() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Halloween Costume Preferences by Age Group</CardTitle>
        <CardDescription>
          Distribution of top 5 costume choices across different age groups
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={costumeData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis 
                dataKey="age" 
                tick={{ fill: 'hsl(var(--foreground))' }}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--foreground))' }}
              />
              <ChartTooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ 
                  paddingTop: '20px',
                  color: 'hsl(var(--foreground))'
                }} 
              />
              {costumes.map((costume, index) => (
                <Bar 
                  key={costume} 
                  dataKey={costume} 
                  stackId="a" 
                  fill={chartConfig[costume].color}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}