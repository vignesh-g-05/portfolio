import type { ReactNode } from "react";

type PromptComponentProps = {
  prompt: ReactNode;
};

const PromptComponent = ({ prompt }: PromptComponentProps) => {
  if (prompt === "__START__") return;
  return (
    <div className="inline-block">
      <div className="mr-2 inline-block">
        <span className="text-chart-2">vicky</span>
        <span className="text-muted-foreground">@</span>
        <span className="text-chart-3">portfolio</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-primary">~/portfolio</span>
        <span className="text-muted-foreground">$</span>
      </div>
      <span>{prompt}</span>
    </div>
  );
};

export default PromptComponent;
