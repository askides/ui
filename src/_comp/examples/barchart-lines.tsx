import { BarChart, BarChartColumn } from "@/_comp/ui/BarChart";
import { Card } from "@/_comp/ui/Card";
import { createSmoothValues } from "@/lib/utils";
import * as React from "react";

export default function BarChartLines() {
  const values = React.useMemo(() => createSmoothValues(40), []);

  return (
    <Card className="flex items-center justify-center h-64 relative px-2 rounded-none w-full">
      <span className="absolute top-5 left-5 text-zinc-500 font-base">
        Loading Many Bars...
      </span>
      <BarChart>
        {values.map((value, idx) => (
          <BarChartColumn className="mx-px" key={idx} value={value} />
        ))}
      </BarChart>
    </Card>
  );
}
