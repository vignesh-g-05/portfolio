import { TERMINAL_COMMANDS } from ".";

type HelpProps = {
  type?: "hint";
};

const Help = ({ type }: HelpProps) => {
  if (type === "hint") return <Hint />;

  return (
    <div className="border-border relative w-fit rounded-lg border-2 p-5">
      <p className="bg-background absolute -top-3 px-3">Available Commands</p>
      {Object.entries(TERMINAL_COMMANDS).map(([key, value]) => (
        <div key={key} className="grid grid-cols-[100px_1fr]">
          <span className="text-chart-2">{key}</span>
          <span className="flex gap-2">
            <span>→</span>
            <span>{value.description}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Help;

const Hint = () => {
  return (
    <div className="text-xs">
      Type <span className="text-chart-3">help</span> to see available commands
    </div>
  );
};
