import { SettingOIcon } from '@/assets/icons'
import LightButton from '@/components/ui/button/LightButton'

function SettingButton() {
  return (
    <LightButton className="text-primary-400">
      <SettingOIcon />
    </LightButton>
  )
}

export default SettingButton