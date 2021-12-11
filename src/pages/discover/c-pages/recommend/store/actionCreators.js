import * as actionTypes from './constants';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getTopBannerAction = () => {
  return dispatch => {
    window.$_api.recommend.getTopBanners().then(res => {
      // console.log(res);
      dispatch(changeTopBannerAction(res));
    })
  }
};


export const getHotRecommendAction = (limit) => {
  return dispatch => {
    window.$_api.recommend.getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}
