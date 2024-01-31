import { SellIcon } from "@/assets/icons";

function ServiceTable() {
  return (
    <div className="overflow-hidden">
      <ul className="min-w-full overflow-x-auto space-y-3">
        {
          Array.from({length: 4}).map((_, index) => (
            <li key={index} className="min-w-[1150px] bg-white rounded-lg flex gap-10 justify-between items-center py-4 px-5">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-magenta/20 text-magenta`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <SellIcon />
                  </div>
                </div>
                <div className="text-lg flex flex-col whitespace-nowrap">
                  <p className="text-black leading-0">It is a long established </p>
                  <p className="text-primary-400 leading-0">Business loans</p>
                </div>
              </div>
              <div className="text-lg flex flex-col whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <div className="text-lg flex flex-col whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <div className="text-lg flex flex-col whitespace-nowrap">
                <p className="text-black leading-0">It is a long established </p>
                <p className="text-primary-400 leading-0">Business loans</p>
              </div>
              <a href="#" className="w-[150px] flex items-center justify-center py-2 px-4 rounded-full border-2 border-primary-400 text-primary-400 text-center text-lg">View details</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ServiceTable;
