import { FormControl, FormLabel, Input, Switch } from '@chakra-ui/react'

function PreferenceSetting() {
  return (
    <div className='space-y-5 pt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <FormControl>
          <FormLabel htmlFor="currency">Currency</FormLabel>
          <Input placeholder="USD" id='currency' />
        </FormControl>
        <FormControl className="space-y-3">
          <FormLabel htmlFor="timeZone">Time Zone</FormLabel>
          <Input placeholder="(GMT-12:00) International Date Line West" id='timeZone' />
        </FormControl>
      </div>
      <div className='space-y-3'>
        <p>Notification</p>
        <div className='space-y-2'>
          <FormControl display='flex' alignItems='center' gap='10px'>
            <Switch id='email-alerts' />
            <FormLabel htmlFor='email-alerts' mb='0'>
              I send or receive digita currency
            </FormLabel>
          </FormControl>
          <FormControl display='flex' alignItems='center' gap='10px'>
            <Switch id='email-alerts' />
            <FormLabel htmlFor='email-alerts' mb='0'>
              I receive merchant order
            </FormLabel>
          </FormControl>
          <FormControl display='flex' alignItems='center' gap='10px'>
            <Switch id='email-alerts' />
            <FormLabel htmlFor='email-alerts' mb='0'>
              There are recommendation for my account
            </FormLabel>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default PreferenceSetting