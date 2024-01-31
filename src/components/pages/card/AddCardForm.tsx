import { Button, FormControl, FormLabel, Input, InputGroup } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react';

function AddCardForm() {
  const [cardNumberValue, setCardNumberValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');
    setCardNumberValue(inputValue);
  };

  const formatCardNumber = (cardNumber: string) => {
    const cardNumberRegex = /(\d{4})/g;
    const maskedCardNumber = cardNumber.replace(cardNumberRegex, '$1 ');
    return maskedCardNumber.trim();
  };

  return (
    <form className='space-y-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="space-y-3">
          <label htmlFor="">Card Type</label>
          <Input placeholder="Classic" />
        </div>
        <div className="space-y-3">
          <label htmlFor="">Name On Card</label>
          <Input placeholder="My Cards" />
        </div>
        <FormControl>
          <FormLabel>Card Number</FormLabel>
          <InputGroup>
            <Input
              type="text"
              placeholder="Enter card number"
              value={formatCardNumber(cardNumberValue)}
              onChange={handleInputChange}
            />
          </InputGroup>
        </FormControl>
        <div className="space-y-3">
          <label htmlFor="">Expiration Date</label>
          <Input placeholder="**** **** **** ****" type="datetime-local" />
        </div>
      </div>
      <div className='flex flex-col w-full md:w-[150px]'>
        <Button>Add card</Button>
      </div>
    </form>
  )
}

export default AddCardForm