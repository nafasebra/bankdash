import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Table, Tabs } from '@chakra-ui/react'

function Tabbar() {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab _selected={{color: 'primary.100'}} className='py-4 px-2 font-semibold text-primary-200'>All Transactions</Tab>
        <Tab _selected={{color: 'primary.100'}} className='py-4 px-2 font-semibold text-primary-200'>Income</Tab>
        <Tab _selected={{color: 'primary.100'}} className='py-4 px-2 font-semibold text-primary-200'>Expense</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="3px"
        borderTopRadius="5px"
        bg='primary.100'
      />
      <TabPanels>
        <TabPanel>
          <Table />
        </TabPanel>
        <TabPanel>
          <Table />
        </TabPanel>
        <TabPanel>
          <Table />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Tabbar