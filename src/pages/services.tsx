import { linkEnum } from "@/enums/link";
import Body from "@/components/layout/Body";
import { BagIcon, LifeIcon, SafeIcon } from "@/assets/icons";
import IconCard from "@/components/ui/card/IconCard";
import LoanTable from "@/components/ui/table/LoanTable";
import SectionWithTitle from "@/components/pages/SectionWithTitle";

function Services() {
  return (
    <Body pageName={linkEnum.Services}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <IconCard
          icon={<LifeIcon />}
          supTitle="Personal Loans"
          title="$50,000"
          mainColor="text-primary-100"
          mainColorAlpha="bg-primary-100/20"
        />
        <IconCard
          icon={<BagIcon />}
          supTitle="Corporate Loans"
          title="$100,000"
          mainColor="text-yellow"
          mainColorAlpha="bg-yellow/20"
        />
        <IconCard
          icon={<SafeIcon />}
          supTitle="Business Loans"
          title="$500,000"
          mainColor="text-magenta"
          mainColorAlpha="bg-magenta/20"
        />
      </div>
      <SectionWithTitle title="Active Loans Overview">
        <LoanTable />
      </SectionWithTitle>
    </Body>
  );
}

export default Services;
