import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import avatar from '@/assets/images/avatar-1.png';
import { FormEvent, useState } from 'react';
import { SendIcon } from '@/assets/icons';
import { Button, Input, Stack, Grid, GridItem } from '@chakra-ui/react';

function SliderCard() {
  const [tab, setTab] = useState(0);
  const [amount, setAmount] = useState('');

  const changeTab = (index: number) => {
    if (index === -1) return;
    setTab(index);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // some code for send to API
    console.log(amount, tab);
  };

  return (
    <>
      <Swiper
        className="h-[145px]"
        slidesPerView={2.5}
        breakpoints={{
          md: {
            slidesPerView: 3.5,
          },
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide
            key={index}
            onClick={() => changeTab(index)}
            className="cursor-pointer pt-7"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 overflow-hidden rounded-full flex items-center justify-center">
                <img src={avatar} className="w-full h-full object-cover" />
              </div>
              <div
                className={`flex flex-col text-center ${index === tab ? 'font-bold' : ''}`}
              >
                <p className="text-center">Randy Press</p>
                <p className="text-primary-400 text-center">Director</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-3">
        <p className="text-sm text-primary-400 flex items-center">
          Write amount
        </p>
        <form className="col-span-1 md:col-span-2" onSubmit={handleSubmit}>
          <Grid templateColumns="repeat(3, 1fr)" gap={3} alignItems="center">
            <GridItem colSpan={2}>
              <Input
                type="number"
                value={amount}
                onChange={event => setAmount(event.target.value)}
                variant={'custom'}
                placeholder="252.22"
              />
            </GridItem>

            <GridItem colSpan={1}>
              <Button type="submit" w="full">
                <Stack
                  direction="row"
                  spacing={2}
                  align="center"
                  justify="center"
                >
                  <span>Send</span>
                  <div className="w-5 h-5">
                    <SendIcon />
                  </div>
                </Stack>
              </Button>
            </GridItem>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default SliderCard;
