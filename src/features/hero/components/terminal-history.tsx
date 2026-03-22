import { PROMPT_COMPONENT } from "../constants/ui";
import { type History } from "./terminal";

const TerminalHistory = ({ history }: { history: History[] }) => {
  return (
    <>
      {history.map((h) => {
        return (
          <div className="space-y-1 wrap-break-word whitespace-pre-wrap">
            <div>
              {PROMPT_COMPONENT}
              <span>{h.prompt}</span>
            </div>
            <div className="text-muted-foreground">{h.output}</div>
          </div>
        );
      })}
    </>
  );
};

export default TerminalHistory;
