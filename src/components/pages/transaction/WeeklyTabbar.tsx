import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";

function WeeklyTabbar() {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab
          _selected={{ color: "primary.100" }}
          className="py-4 px-2 font-semibold text-primary-200"
        >
          All Transactions
        </Tab>
        <Tab
          _selected={{ color: "primary.100" }}
          className="py-4 px-2 font-semibold text-primary-200"
        >
          Income
        </Tab>
        <Tab
          _selected={{ color: "primary.100" }}
          className="py-4 px-2 font-semibold text-primary-200"
        >
          Expense
        </Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="3px"
        borderTopRadius="5px"
        bg="primary.100"
      />
      <TabPanels>
        <TabPanel pb={0} px={0}>
          <TransactionTable />
        </TabPanel>
        <TabPanel pb={0} px={0}>
          <TransactionTable />
        </TabPanel>
        <TabPanel pb={0} px={0}>
          <TransactionTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default WeeklyTabbar;
