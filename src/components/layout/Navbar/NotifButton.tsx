import { BellIcon } from '@/assets/icons'
import LightButton from '@/components/ui/button/LightButton'

function NotifButton() {
  return (
    <LightButton className="text-magenta">
      <BellIcon />
    </LightButton>
  )
}

export default NotifButton