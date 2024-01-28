import { linkEnum } from "@/types/enums/link";
import Body from "@/components/layout/Body";
import IconCard from "@/components/ui/card/IconCard";
import { CoinPackIcon, ReturnIcon } from "@/assets/icons";
import PieChart from "@/components/ui/chart/PieChart";

function Investment() {
  return (
    <Body pageName={linkEnum.Investments}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <IconCard
          icon={<CoinPackIcon />}
          supTitle="Corporate Loans"
          title="$100,000"
          mainColor="text-cyan"
          mainColorAlpha="bg-cyan/20"
          reverse
        />
        <IconCard
          icon={<PieChart />}
          supTitle="Business Loans"
          title="$500,000"
          mainColor="text-magenta"
          mainColorAlpha="bg-magenta/20"
          reverse
        />
        <IconCard
          icon={<ReturnIcon />}
          supTitle="Custom Loans"
          title="Choose Money"
          mainColor="text-cyan"
          mainColorAlpha="bg-cyan/20"
          reverse
        />
      </div>
    </Body>
  );
}

export default Investment;
