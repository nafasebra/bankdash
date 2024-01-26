import { linkEnum } from "@/enums/link";
import {
  AccountIcon,
  BarIcon,
  Service2nIcon,
  Settings2Icon,
} from "@/assets/icons";
import Body from "@/components/layout/Body";
import IconCard from "@/components/ui/card/IconCard";

function Accounts() {
  return (
    <Body pageName={linkEnum.Accounts}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <IconCard
          icon={<AccountIcon />}
          supTitle="Personal Loans"
          title="$50,000"
          mainColor="text-primary-100"
          mainColorAlpha="bg-primary-100/20"
          reverse
        />
        <IconCard
          icon={<Service2nIcon />}
          supTitle="Corporate Loans"
          title="$100,000"
          mainColor="text-yellow"
          mainColorAlpha="bg-yellow/20"
          reverse
        />
        <IconCard
          icon={<BarIcon />}
          supTitle="Business Loans"
          title="$500,000"
          mainColor="text-magenta"
          mainColorAlpha="bg-magenta/20"
          reverse
        />
        <IconCard
          icon={<Settings2Icon />}
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

export default Accounts;
