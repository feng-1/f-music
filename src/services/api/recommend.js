import request from '../request';
const recommend = {
  getTopBanners() {
    return request({
      url: "/banner"
    })
  },
  getHotRecommends(limit) {
    return request({
      url: "/personalized",
      params: {
        limit
      }
    })
  },
  getNewAlbums(limit) {
    return request({
      url: "/top/album",
      params: {
        limit
      }
    })
  },
  getTopList(idx) {
    return request({
      url: "/top/list",
      params: {
        idx
      }
    })
  },
}

export default recommend;
