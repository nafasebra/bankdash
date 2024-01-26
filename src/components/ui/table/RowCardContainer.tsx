import RowCard from "@/components/ui/card/RowCard";

function RowCardContainer() {
  return (
    <div className="overflow-x-hidden">
      <div className="overflow-x-auto space-y-3">
        <RowCard />
        <RowCard />
        <RowCard />
        <RowCard />
      </div>
    </div>
  );
}

export default RowCardContainer;
