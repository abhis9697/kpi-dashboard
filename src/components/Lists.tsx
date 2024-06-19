import { BarChart } from "./BarChat";
import { Cards } from "./Cards";

export const Lists = ({
  title,
  description,
  onOpen,
}: {
  title: string;
  description: string;
  onOpen: (value: boolean) => void;
}) => {
  return (
    <div className="flex flex-col max-w-[700px] mx-auto my-8 space-y-10">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Cards onOpen={onOpen} />
        <Cards onOpen={onOpen} />
        {title === "Layouts" ? (
          <div className="col-span-2">
            <BarChart />
          </div>
        ) : (
          <>
            <Cards onOpen={onOpen} />
            <Cards onOpen={onOpen} />
          </>
        )}
      </div>
    </div>
  );
};
