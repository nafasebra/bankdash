import { FormControl, FormLabel, Input, Switch } from '@chakra-ui/react'

function SecuritySetting() {
  return (
    <div className='flex flex-col gap-5 w-full sm:w-[50%] pt-5'>
      <div className='space-y-3'>
        <p>Two-factor Authentication</p>
        <FormControl display='flex' alignItems='center'>
          <Switch id='email-alerts' />
          <FormLabel htmlFor='email-alerts' mb='0'>
            Enable or disable two factor authentication
          </FormLabel>
        </FormControl>
      </div>
      <div className='space-y-4'>
        <p>Change Password</p>
        <div className="space-y-3">
          <label htmlFor="">Current Password</label>
          <Input placeholder="**********" size="lg" />
        </div>
        <div className="space-y-3">
          <label htmlFor="">New Password</label>
          <Input placeholder="**********" size="lg" />
        </div>
      </div>
    </div>
  )
}

export default SecuritySetting