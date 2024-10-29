import { CustomTooltipProps } from './types';

export function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="bg-background p-4 rounded-lg shadow-md border border-border">
      <p className="font-bold mb-2">{`Age Group: ${label}`}</p>
      {payload.map((entry, index) => (
        <p key={`item-${index}`} className="text-sm flex items-center gap-2">
          <span 
            className="inline-block w-3 h-3 rounded-sm" 
            style={{ backgroundColor: entry.fill }}
          />
          {`${entry.name}: ${entry.value}`}
        </p>
      ))}
    </div>
  );
}