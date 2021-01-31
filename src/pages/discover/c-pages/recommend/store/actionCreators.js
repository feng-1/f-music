import * as actionTypes from './constants';

import services from '@/services';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

export const getTopBannerAction = () => {
  return dispatch => {
    services.getTopBanners().then(res => {
      console.log(res);
      dispatch(changeTopBannerAction(res));
    })
  }
};