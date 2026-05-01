import PromptComponent from "./prompt-component";
import { type History } from "./terminal";

const TerminalHistory = ({ history }: { history: History[] }) => {
  return (
    <>
      {history.map((h) => {
        return (
          <div className="space-y-1 wrap-break-word whitespace-pre-wrap">
            <div>
              <PromptComponent prompt={h.prompt} />
            </div>
            <div className="text-muted-foreground">{h.output}</div>
          </div>
        );
      })}
    </>
  );
};

export default TerminalHistory;
