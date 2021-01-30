import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'

import routes from './router'

import FAppHeader from '@/components/app-header'
import FAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <HashRouter>
      <FAppHeader />
      {renderRoutes(routes)}
      <FAppFooter />
    </HashRouter>
  )
})
