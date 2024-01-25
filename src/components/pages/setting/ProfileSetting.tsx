import { Input } from "@chakra-ui/react";
import avatar from "@/assets/images/avatar.png";
import { PencilIcon } from "@/assets/icons";

function ProfileSetting() {
  return (
    <div className="flex flex-col md:flex-row gap-5 pt-5">
      <div className="w-full md:w-[250px]">
        <div className="relative">
          <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full overflow-hidden">
            <img
              src={avatar}
              className="w-full h-full object-cover aspect-auto"
              alt="avatar of username"
            />
          </div>
          <div className="w-8 h-8 bg-primary-100 text-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6">
              <PencilIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[calc(100%-250px-1.25rem)] space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-3">
            <label htmlFor="">Your Name</label>
            <Input placeholder="Charlene Reed" size="lg" />
          </div>
          <div className="space-y-3">
            <label htmlFor="">User Name</label>
            <Input placeholder="Charlene Reed " size="lg" />
          </div>
          <div className="space-y-3">
            <label htmlFor="">Email</label>
            <Input placeholder="charlenereed@gmail.com  " size="lg" />
          </div>
          <div className="space-y-3">
            <label htmlFor="">Password</label>
            <Input placeholder="******" size="lg" />
          </div>
          <div className="space-y-3">
            <label htmlFor="">Date of Birth</label>
            <Input
              placeholder="Select Date and Time"
              size="lg"
              type="datetime-local"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="">Present Address</label>
            <Input placeholder="San Jose, California, USA" size="lg" />
          </div>
          <div className="space-y-3">
            <label htmlFor="">Permanent Address</label>
            <Input placeholder="San Jose, California, USA" size="lg" />
          </div>
          <div className="space-y-3">
            <label htmlFor="">City</label>
            <Input placeholder="San Jose" size="lg" />
          </div>
          <div className="space-y-3">
            <label htmlFor="">Postal Code</label>
            <Input placeholder="45962" size="lg" />
          </div>
          <div className="space-y-3">
            <label htmlFor="">Country</label>
            <Input placeholder="USA" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;