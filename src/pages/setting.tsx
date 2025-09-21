import { linkEnum } from "@/enums/link";
import Body from "@/components/layout/body";
import ProfileSetting from "@/components/pages/setting/profile-setting";
import PreferenceSetting from "@/components/pages/setting/preference-setting";
import SecuritySetting from "@/components/pages/setting/security-setting";
import {
  Button,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

function Setting() {
  return (
    <Body pageName={linkEnum.Setting}>
      <div className="bg-white rounded-lg p-6 overflow-hidden space-y-5">
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab
              _selected={{ color: "primary.100" }}
              className="py-7 px-4 font-semibold text-primary-200"
            >
              Edit Profile
            </Tab>
            <Tab
              _selected={{ color: "primary.100" }}
              className="py-7 px-4 font-semibold text-primary-200"
            >
              Preferences
            </Tab>
            <Tab
              _selected={{ color: "primary.100" }}
              className="py-7 px-4 font-semibold text-primary-200"
            >
              Security
            </Tab>
          </TabList>
          <TabIndicator
            mt="0"
            height="3px"
            borderTopRadius="5px"
            bg="primary.100"
          />
          <TabPanels>
            <TabPanel>
              <ProfileSetting />
            </TabPanel>
            <TabPanel>
              <PreferenceSetting />
            </TabPanel>
            <TabPanel>
              <SecuritySetting />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <div className="flex justify-end">
          <div className="flex flex-col w-full md:w-[150px]">
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Setting;
