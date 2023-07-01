import { BarChart, BarChartColumn } from "@/_comp/ui/BarChart";
import { Card } from "@/_comp/ui/Card";
import { createSmoothValues } from "@/lib/utils";
import * as React from "react";

export default function BarChartAnimate() {
  const values = React.useMemo(() => createSmoothValues(40), []);

  return (
    <Card className="flex items-center justify-center h-64 relative px-5 w-full">
      <span className="absolute top-5 left-5 text-zinc-500 font-base">
        Hover on a bar...
      </span>
      <BarChart>
        {values.map((value, idx) => (
          <BarChartColumn
            className="mx-0.5 hover:bg-sky-500 hover:mb-3 cursor-pointer"
            key={idx}
            value={value}
          />
        ))}
      </BarChart>
    </Card>
  );
}
