import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Lists } from "./Lists";

export const TabSelector = ({
  onOpen,
}: {
  onOpen: (value: boolean) => void;
}) => {
  const tabs = ["Featured", "KPI", "Layouts", "Storyboards"];
  return (
    <div className="my-2 w-full max-w-[700px] mx-auto">
      <TabGroup>
        <TabList className="bg-[#f2f5f9] p-1 border border-[#f2f5f9] flex items-center justify-between rounded-md">
          {tabs.map((tab) => {
            return (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `px-12 py-1.5 rounded-md focus:outline-none ${
                    selected ? "bg-white" : ""
                  }`
                }
              >
                {tab}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          <TabPanel>
            <Lists
              title="Featured"
              description="Curated top pick from this week"
              onOpen={onOpen}
            />
          </TabPanel>
          <TabPanel>
            <Lists
              title="KPI"
              description="Curated top pick from this week"
              onOpen={onOpen}
            />
          </TabPanel>
          <TabPanel>
            <Lists
              title="Layouts"
              description="Curated top pick from this week"
              onOpen={onOpen}
            />
          </TabPanel>
          <TabPanel>
            <Lists
              title="Storyboards"
              description="Curated top pick from this week"
              onOpen={onOpen}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};
