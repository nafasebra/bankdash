import { linkEnum } from "@/types/enums/link";
import Body from "@/components/layout/Body";
import { BagIcon, LifeIcon, SafeIcon } from "@/assets/icons";
import IconCard from "@/components/ui/card/IconCard";
import SectionWithTitle from "@/components/pages/SectionWithTitle";
import { ServiceTable } from "@/components/pages/service";

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
      <SectionWithTitle title="Bank Services List" container={false}>
        <ServiceTable />
      </SectionWithTitle>
    </Body>
  );
}

export default Services;
