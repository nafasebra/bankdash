import { linkEnum } from '@/enums/link'
import Body from '../components/layout/Body'

function Home() {
  return (
    <Body pageName={linkEnum.Dashboard}>
      <p>Home</p>
    </Body>
  )
}

export default Home
