import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import avatar from "@/assets/images/avatar.png";
import { PencilIcon } from "@/assets/icons";

function ProfileSetting() {
  return (
    <div className="flex flex-col md:flex-row gap-8 pt-5">
      <div className="w-full md:w-[200px]">
        <div className="relative">
          <div className="flex items-center justify-center rounded-full overflow-hidden">
            <img
              src={avatar}
              className="w-full h-full object-cover aspect-auto"
              alt="avatar of username"
            />
          </div>
          <button type="button" className="absolute bottom-3 right-3 w-10 h-10 bg-primary-100 text-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 flex items-center justify-center">
              <PencilIcon />
            </div>
          </button>
        </div>
      </div>
      <div className="w-full md:w-[calc(100%-200px-2rem)] space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormControl className="space-y-3">
            <FormLabel htmlFor="">Your Name</FormLabel>
            <Input placeholder="Charlene Reed" />
          </FormControl>
          <FormControl className="space-y-3">
            <FormLabel htmlFor="">User Name</FormLabel>
            <Input placeholder="Charlene Reed " />
          </FormControl>
          <FormControl className="space-y-3">
            <FormLabel htmlFor="">Email</FormLabel>
            <Input placeholder="charlenereed@gmail.com  " />
          </FormControl>
          <FormControl className="space-y-3">
            <FormLabel htmlFor="">Password</FormLabel>
            <Input placeholder="******" />
          </FormControl>
          <FormControl className="space-y-3">
            <FormLabel htmlFor="">Date of Birth</FormLabel>
            <Input
              placeholder="Select Date and Time"
              type="datetime-local"
            />
          </FormControl>
          <FormControl className="space-y-3">
            <FormLabel htmlFor="">Present Address</FormLabel>
            <Input placeholder="San Jose, California, USA" />
          </FormControl>
          <FormControl className="space-y-3">
            <FormLabel htmlFor="">Permanent Address</FormLabel>
            <Input placeholder="San Jose, California, USA" />
          </FormControl>
          <FormControl className="space-y-3">
            <FormLabel htmlFor="">City</FormLabel>
            <Input placeholder="San Jose" />
          </FormControl>
          <FormControl className="space-y-3">
            {/* lint stage */}
            {/* eol */}
            
            <FormLabel htmlFor="">Postal Code</FormLabel>
            <Input placeholder="45962" />
          </FormControl>
          <FormControl className="space-y-3">
            <FormLabel htmlFor="">Country</FormLabel>
            <Input placeholder="USA" />
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
