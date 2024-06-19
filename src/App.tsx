import { useState } from "react";
import { Lists } from "./components/Lists";
import { Modal } from "./components/Modal";
import { TabSelector } from "./components/TabSelector";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (value: boolean) => setIsOpen(value);
  return (
    <div className="container mx-auto relative h-screen py-4">
      <button className="bg-[#66758d] text-white px-6 py-1 rounded-md absolute top-1 right-4">
        Request
      </button>
      <div className="flex flex-col justify-center items-center my-3 space-y-6">
        <h1 className="text-4xl font-bold">Library</h1>
        <p>Browse for assets needed to report and present analysis.</p>
        <input
          className="border border-blue-100 rounded-md w-full max-w-[700px] px-4 py-1.5 focus:outline-none"
          placeholder="Type to search..."
        />
      </div>
      <TabSelector onOpen={handleToggle} />
      <Lists
        title="Trending"
        description="Most popular by community"
        onOpen={handleToggle}
      />
      <Modal isOpen={isOpen} onClose={handleToggle} />
    </div>
  );
};

export default App;
