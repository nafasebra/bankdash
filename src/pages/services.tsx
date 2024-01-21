import { linkEnum } from "@/enums/link";
import Body from "@/components/layout/Body";
import { BagIcon, LifeIcon, SafeIcon, SellIcon } from "@/assets/icons";
import IconCard from "@/components/ui/card/IconCard";
import SectionWithTitle from "@/components/pages/SectionWithTitle";

function Services() {
  return (
    <Body pageName={linkEnum.Services}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <IconCard
          icon={<LifeIcon />}
          supTitle="Unlimited protection"
          title="Life Insurance"
          mainColor="text-primary-100"
          mainColorAlpha="bg-primary-100/20"
          reverse={false}
        />
        <IconCard
          icon={<BagIcon />}
          supTitle="Buy. Think. Grow"
          title="Shopping"
          mainColor="text-yellow"
          mainColorAlpha="bg-yellow/20"
          reverse={false}
        />
        <IconCard
          icon={<SafeIcon />}
          supTitle="We are your allies"
          title="Safety"
          mainColor="text-cyan"
          mainColorAlpha="bg-cyan/20"
          reverse={false} 
        />
      </div>
      <SectionWithTitle title="Bank Services List">
        <div className="overflow-x-hidden">
          <div className="overflow-x-auto space-y-2">
            <div className="bg-white rounded-lg flex gap-10 justify-between py-4 px-5">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-magenta/20 text-magenta`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <SellIcon />
                  </div>
                </div>
                <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                  <p className="text-black leading-0">It is a long established </p>
                  <p className="text-primary-400 leading-0">Business loans</p>
                </div>
              </div>
              <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <a href="#" className="w-[150px] flex items-center justify-center py-2 px-4 rounded-full border-2 border-primary-400 text-primary-400 text-center text-lg">Download</a>
            </div>
            <div className="bg-white rounded-lg flex gap-10 justify-between py-4 px-5">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-magenta/20 text-magenta`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <SellIcon />
                  </div>
                </div>
                <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                  <p className="text-black leading-0">It is a long established </p>
                  <p className="text-primary-400 leading-0">Business loans</p>
                </div>
              </div>
              <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <a href="#" className="w-[150px] flex items-center justify-center py-2 px-4 rounded-full border-2 border-primary-400 text-primary-400 text-center text-lg">Download</a>
            </div>
            <div className="bg-white rounded-lg flex gap-10 justify-between py-4 px-5">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-magenta/20 text-magenta`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <SellIcon />
                  </div>
                </div>
                <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                  <p className="text-black leading-0">It is a long established </p>
                  <p className="text-primary-400 leading-0">Business loans</p>
                </div>
              </div>
              <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <div className="text-xl flex flex-col gap-1 whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <a href="#" className="w-[150px] flex items-center justify-center py-2 px-4 rounded-full border-2 border-primary-400 text-primary-400 text-center text-lg">Download</a>
            </div>
          </div>
        </div>
      </SectionWithTitle>
    </Body>
  );
}

export default Services;
