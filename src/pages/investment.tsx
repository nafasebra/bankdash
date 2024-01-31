import { linkEnum } from "@/types/enums/link";
import Body from "@/components/layout/Body";
import IconCard from "@/components/ui/card/IconCard";
import { CoinPackIcon, PieChartIcon, ReturnIcon } from "@/assets/icons";
import SectionWithTitle from "@/components/pages/SectionWithTitle";
import {InvestmentChart, RevenueChart, InvestmentTable, TrendingTable} from "@/components/pages/investment";

function Investment() {
  return (
    <Body pageName={linkEnum.Investments}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5">
        <IconCard
          icon={<CoinPackIcon />}
          supTitle="Total Invested Amount"
          title="$150,000"
          mainColor="text-cyan"
          mainColorAlpha="bg-cyan/20"
          reverse
        />
        <IconCard
          icon={<PieChartIcon />}
          supTitle="Number of Investments"
          title="1,250"
          mainColor="text-magenta"
          mainColorAlpha="bg-magenta/20"
          reverse
        />
        <IconCard
          icon={<ReturnIcon />}
          supTitle="Rate of Return"
          title="+5.80%"
          mainColor="text-primary"
          mainColorAlpha="bg-primary/20"
          reverse
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <SectionWithTitle title="Yearly Total Investment">
          <InvestmentChart />
        </SectionWithTitle>
        <SectionWithTitle title="Monthly Revenue">
          <RevenueChart />
        </SectionWithTitle>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[65%] flex flex-col gap-5">
          <SectionWithTitle title="My Investment" container={false}>
            <InvestmentTable />
          </SectionWithTitle>
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-5">
          <SectionWithTitle title="Trending Stock" container={false}>
            <TrendingTable />
          </SectionWithTitle>
        </div>
      </div>
    </Body>
  );
}

export default Investment;
