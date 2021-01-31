// import React from 'react'
import FDiscover from '@/pages/discover'
import FRecommend from '@/pages/discover/c-pages/recommend'
import FRanking from '@/pages/discover/c-pages/ranking'
import FSongs from '@/pages/discover/c-pages/songs'
import FDjradio from '@/pages/discover/c-pages/djradio'
import FArtist from '@/pages/discover/c-pages/artist'
import FAlbum from '@/pages/discover/c-pages/album'
import FPlayer from '@/pages/discover/c-pages/player'

import FFriend from '@/pages/friend'
import FMine from '@/pages/mine'
import { Redirect } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: FDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: FRecommend
      },
      {
        path: "/discover/ranking",
        component: FRanking
      },
      {
        path: "/discover/songs",
        component: FSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: FDjradio
      },
      {
        path: "/discover/artist",
        component: FArtist
      },
      {
        path: "/discover/album",
        component: FAlbum
      },
      {
        path: "/discover/player",
        component: FPlayer
      }
    ]
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