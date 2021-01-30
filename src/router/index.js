import FDiscover from '@/pages/discover'
import FFriend from '@/pages/friend'
import FMine from '@/pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    component: FDiscover
  },
  {
    path: '/mine',
    component: FMine
  },
  {
    path: '/friend',
    component: FFriend
  }
]

export default routes