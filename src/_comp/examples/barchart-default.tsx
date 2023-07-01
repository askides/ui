import { BarChart, BarChartColumn } from "@/_comp/ui/BarChart";
import { Card } from "@/_comp/ui/Card";
import { createSmoothValues } from "@/lib/utils";
import * as React from "react";

export default function BarChartDefault() {
  const values = React.useMemo(() => createSmoothValues(30), []);

  return (
    <Card className="flex items-center justify-center h-64 relative px-5 w-full">
      <span className="absolute top-5 left-5 text-zinc-500 font-base">
        Loading Report...
      </span>
      <BarChart>
        {values.map((value, idx) => (
          <BarChartColumn key={idx} value={value} />
        ))}
      </BarChart>
    </Card>
  );
}
