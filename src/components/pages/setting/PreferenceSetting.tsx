import { FormControl, FormLabel, Input, Switch } from '@chakra-ui/react'
import React from 'react'

function PreferenceSetting() {
  return (
    <div className='space-y-5 pt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="space-y-3">
          <label htmlFor="">Currency</label>
          <Input placeholder="USD" size="lg" />
        </div>
        <div className="space-y-3">
          <label htmlFor="">Time Zone</label>
          <Input placeholder="(GMT-12:00) International Date Line West" size="lg" />
        </div>
      </div>
      <div className='space-y-3'>
        <p>Notification</p>
        <div className='space-y-2'>
          <FormControl display='flex' alignItems='center'>
            <Switch id='email-alerts' />
            <FormLabel htmlFor='email-alerts' mb='0'>
              I send or receive digita currency
            </FormLabel>
          </FormControl>
          <FormControl display='flex' alignItems='center'>
            <Switch id='email-alerts' />
            <FormLabel htmlFor='email-alerts' mb='0'>
              I receive merchant order
            </FormLabel>
          </FormControl>
          <FormControl display='flex' alignItems='center'>
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