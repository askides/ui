import { BarChart, BarChartColumn } from "@/_comp/ui/BarChart";
import { Card } from "@/_comp/ui/Card";
import { createSmoothValues } from "@/lib/utils";
import * as React from "react";

export default function BarChartAnimate() {
  const values = React.useMemo(() => createSmoothValues(20, { mh: 85 }), []);

  return (
    <Card className="flex items-center justify-center h-48 relative px-2 w-full">
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
