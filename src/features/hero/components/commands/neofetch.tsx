import { NEO_FETCH_ART, NEOFETCH_DATA } from "../../constants/ui";

const NeoFetch = () => {
  return (
    <div className="flex max-w-150 flex-wrap gap-5">
      <pre className="text-primary mx-auto text-xs leading-tight">
        {NEO_FETCH_ART}
      </pre>
      <NeoFetchData />
    </div>
  );
};

const NeoFetchData = () => {
  return (
    <div className="flex flex-col gap-3 text-xs">
      {NEOFETCH_DATA.map((data) => {
        return (
          <div
            key={data.label}
            className="grid max-w-100 grid-cols-[100px_1fr]"
          >
            <div className="text-chart-2 flex gap-3">
              <div className="size-3">
                <data.Icon className="size-4" />
              </div>
              <div>{data.label}</div>
            </div>
            <div>{data.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NeoFetch;
