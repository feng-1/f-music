import * as recommend  from './api/recommend'
import * as player  from './api/player'

const services = {
  ...recommend,
  ...player
}
export default services