import PromptComponent from "./prompt-component";
import { type History } from "./terminal";

const TerminalHistory = ({ history }: { history: History[] }) => {
  return (
    <>
      {history.map((h) => {
        return (
          <div className="wrap-break-word whitespace-pre-wrap">
            <div>
              <PromptComponent prompt={h.prompt} />
            </div>
            <div className="text-muted-foreground my-5">{h.output}</div>
          </div>
        );
      })}
    </>
  );
};

export default TerminalHistory;
