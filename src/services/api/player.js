import request from '../request';
const player = {
  getSongDetail(ids) {
    return request({
      url: "/song/detail",
      params: {
        ids
      }
    })
  },
  getLyric(id) {
    return request({
      url: "/lyric",
      params: {
        id
      }
    })
  }
}

export default player;