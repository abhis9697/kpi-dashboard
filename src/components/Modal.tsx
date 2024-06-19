import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { LuBoxSelect } from "react-icons/lu";

export function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-2xl space-y-4 bg-white py-4 px-4 relative rounded shadow max-h-[500px] overflow-y-auto">
          <button
            className="absolute top-0 right-4"
            onClick={() => onClose(false)}
          >
            x
          </button>
          <div className="flex flex-col items-center gap-1">
            <LuBoxSelect size={36} />
            <div className="flex items-center gap-2">
              <DialogTitle className="font-bold text-2xl uppercase">
                Intes
              </DialogTitle>
              <span className="bg-[#f2f5f9] p-1 text-xs rounded">Layout</span>
            </div>
            <p className="text-gray-500 text-xs">
              Description name of the Layout
            </p>
          </div>
          <p className="my-4 text-sm text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            nemo porro quas, velit dolor voluptates impedit ipsum repudiandae.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 w-full">
            <span className="bg-[#f2f5f9] p-1 text-xs rounded">#comms</span>
            <span className="bg-[#f2f5f9] p-1 text-xs rounded">#coverage</span>
            <span className="bg-[#f2f5f9] p-1 text-xs rounded">
              #statckholders
            </span>
          </div>
          <div className="flex justify-evenly items-center divide-x-2 divide-[#f2f5f9] w-full">
            <div className="flex flex-col gap-0.5 items-center p-6">
              <span className="font-semibold">2485</span>
              <span className="text-gray-500 text-xs">Used &#9432;</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center p-6">
              <span className="font-semibold">Universal</span>
              <span className="text-gray-500 text-xs">Type</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center p-6">
              <span className="font-semibold">6</span>
              <span className="text-gray-500 text-xs">Pages No. &#9432;</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center p-6">
              <span className="font-semibold">07/23/2024</span>
              <span className="text-gray-500 text-xs">Last Updated</span>
            </div>
          </div>
          <div className="w-full h-[250px] bg-[#f2f5f9]" />
          <div className="flex flex-col gap-2">
            <h5 className="text-xl font-semibold">Business Questions</h5>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f2f5f9] p-4 rounded-md">
                <h6 className="font-semibold">Question 1</h6>
                <p className="text-sm text-gray-500">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div className="bg-[#f2f5f9] p-4 rounded-md">
                <h6 className="font-semibold">Question 2</h6>
                <p className="text-sm text-gray-500">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div className="bg-[#f2f5f9] p-4 rounded-md">
                <h6 className="font-semibold">Question 3</h6>
                <p className="text-sm text-gray-500">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div className="bg-[#f2f5f9] p-4 rounded-md">
                <h6 className="font-semibold">Question 4</h6>
                <p className="text-sm text-gray-500">
                  Short description of the item goes nicely here.
                </p>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
