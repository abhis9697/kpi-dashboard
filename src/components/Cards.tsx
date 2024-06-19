export const Cards = ({ onOpen }: { onOpen: (value: boolean) => void }) => {
  return (
    <div
      className="flex items-center gap-4 bg-white border border-[#f2f5f9] p-4 rounded-md"
      onClick={() => onOpen(true)}
    >
      <div className="bg-[#f2f5f9] p-3 rounded-md h-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <h4>Item Name</h4>
        <p className="text-sm">
          Short description of the item goes nicely here.
        </p>
      </div>
    </div>
  );
};
