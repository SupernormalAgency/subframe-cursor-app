"use client";
/*
 * Documentation:
 * Line Chart — https://app.subframe.com/c51278417bcd/library?component=Line+Chart_22944dd2-3cdd-42fd-913a-1b11a3c1d16d
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface LineChartRootProps
  extends React.ComponentProps<typeof SubframeCore.LineChart> {
  className?: string;
}

const LineChartRoot = React.forwardRef<HTMLElement, LineChartRootProps>(
  function LineChartRoot(
    { className, ...otherProps }: LineChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.LineChart
        className={SubframeUtils.twClassNames("h-80 w-full", className)}
        ref={ref as any}
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

export const LineChart = LineChartRoot;
