"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            "relative h-5 w-full overflow-hidden rounded-full bg-secondary",
            className
        )}
        {...props}
    >
        {value !== null && value !== undefined && value < 35 ? (
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-red-500 transition-all text-white"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
                // value={value}
            />
        ) : value !== null && value !== undefined && value < 59 ? (
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-yellow-500 transition-all text-white"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
                // value={value}
            />
        ) : (
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-lime-600 transition-all text-white"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
                // value={value}
            />
        )}
    </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
