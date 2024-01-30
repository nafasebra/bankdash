import { FormControl, FormLabel, Input, Switch } from "@chakra-ui/react";

function SecuritySetting() {
  return (
    <div className="flex flex-col gap-7 w-full sm:w-[50%] pt-5">
      <div className="space-y-3">
        <p className="text-lg">Two-factor Authentication</p>
        <FormControl display="flex" alignItems="center" gap="10px">
          <Switch id="email-alerts" />
          <FormLabel htmlFor="email-alerts" mb="0">
            Enable or disable two factor authentication
          </FormLabel>
        </FormControl>
      </div>
      <div className="space-y-4">
        <p className="text-lg">Change Password</p>
        <FormControl>
          <FormLabel htmlFor="password">Current Password</FormLabel>
          <Input placeholder="**********" id="password" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="repeatPassword">Repeat Password</FormLabel>
          <Input placeholder="**********" id="repeatPassword" />
        </FormControl>
      </div>
    </div>
  );
}

export default SecuritySetting;
