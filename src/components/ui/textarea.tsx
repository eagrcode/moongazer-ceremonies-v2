import * as React from "react";

import { cn } from "../../lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[150px] w-full rounded-sm border bg-primary px-3 py-2 text-sm shadow-sm  focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 border-gray-800 placeholder:text-gray-400 focus-visible:ring-gray-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
