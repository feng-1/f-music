import React, { memo } from 'react'

import FTopBanner from './c-cpns/top-banner';
import FHotRecommend from './c-cpns/hot-recommend';
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

// function FRecommend(props) {
//   const { getBanners, topBanners } = props
//   console.log(777,topBanners);
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>FRecommend</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(FRecommend))


function FRecommend(props) {
  return (
    <RecommendWrapper>
      <FTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <FHotRecommend/>
        </RecommendLeft>
        <RecommendRight>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(FRecommend)
