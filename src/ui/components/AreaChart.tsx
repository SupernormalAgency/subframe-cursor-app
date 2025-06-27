"use client";
/*
 * Documentation:
 * Area Chart — https://app.subframe.com/c51278417bcd/library?component=Area+Chart_8aa1e7b3-5db6-4a62-aa49-137ced21a231
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface AreaChartRootProps
  extends React.ComponentProps<typeof SubframeCore.AreaChart> {
  stacked?: boolean;
  className?: string;
}

const AreaChartRoot = React.forwardRef<HTMLElement, AreaChartRootProps>(
  function AreaChartRoot(
    { stacked = false, className, ...otherProps }: AreaChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.AreaChart
        className={SubframeUtils.twClassNames("h-80 w-full", className)}
        ref={ref as any}
        stacked={stacked}
        colors={[
          "#0c6d62",
          "#083932",
          "#12a594",
          "#09443c",
          "#10b3a3",
          "#0b544a",
        ]}
        dark={true}
        {...otherProps}
      />
    );
  }
);

export const AreaChart = AreaChartRoot;
