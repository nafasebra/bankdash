import { linkEnum } from "@/enums/link";
import Body from "@/components/layout/Body";
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ProfileSetting from "@/components/pages/setting/ProfileSetting";

function Setting() {
  return (
    <Body pageName={linkEnum.Setting}>
      <div className="bg-white rounded-lg p-5 overflow-hidden">
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab _selected={{color: 'primary.100'}} className='py-7 px-4 font-semibold text-primary-200'>Edit Profile</Tab>
            <Tab _selected={{color: 'primary.100'}} className='py-7 px-4 font-semibold text-primary-200'>Preferences</Tab>
            <Tab _selected={{color: 'primary.100'}} className='py-7 px-4 font-semibold text-primary-200'>Security</Tab>
          </TabList>
          <TabIndicator
            mt="0"
            height="3px"
            borderTopRadius="5px"
            bg='primary.100'
          />
          <TabPanels>
            <TabPanel>
              <ProfileSetting />
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Body>
  );
}

export default Setting;
