import PromptComponent from "./prompt-component";
import { type History } from "./terminal";

const TerminalHistory = ({ history }: { history: History[] }) => {
  return (
    <>
      {history.map((entry, i) => {
        return (
          <div key={i} className="wrap-break-word whitespace-pre-wrap">
            <div>
              <PromptComponent prompt={entry.prompt} />
            </div>
            <div className="text-muted-foreground my-5">{entry.output}</div>
          </div>
        );
      })}
    </>
  );
};

export default TerminalHistory;
