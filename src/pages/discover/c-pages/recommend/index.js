import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function FRecommend(props) {
  const { getBanners, topBanners } = props
  console.log(777,topBanners);
  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>
      <h2>FRecommend</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
});

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(FRecommend))
