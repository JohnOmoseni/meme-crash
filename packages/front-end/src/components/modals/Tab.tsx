"use client";

import { TabProps, TabsProps } from "@/types";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const Tab = ({ id, activeTab, tab, changeTab, className }: TabProps) => {
  return (
    <li
      id={id}
      role="tab"
      aria-selected={activeTab === id ? "true" : "false"}
      className={twMerge(
        `${
          activeTab === id ? "transition-sm" : ""
        } relative cursor-pointer whitespace-nowrap px-2 pb-3.5 text-center font-normal capitalize leading-5`,
        className,
      )}
      onClick={() => changeTab(id)}
    >
      {tab}

      {activeTab === id && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn" }}
          className="absolute bottom-0 left-0 right-0 mx-auto h-[3px] w-[90%] rounded-full bg-variant-300"
        />
      )}
    </li>
  );
};

export const Tabs = ({ activeTab, changeTab, tabIDs }: TabsProps) => {
  return (
    <div className="overflow-x-auto bg-variant-tab opacity-80 shadow-tabs">
      <ul
        role="tablist"
        aria-label="Tabs"
        className="row-flex-start gap-8 px-4 pt-4 md:px-8 lg:gap-14"
      >
        {tabIDs.map((tab, idx) => {
          return (
            <Tab
              key={idx}
              id={tabIDs[idx]}
              activeTab={activeTab}
              tab={tab}
              changeTab={changeTab}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
