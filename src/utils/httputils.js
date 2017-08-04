import Vue from 'vue'

export const getData = ({ dispatch }) => {
    Vue.http.get(url, { req: 'req body' }).then((res) => {
        // 正常返回, 别忘了处理错误
        dispatch(REFRESH_DATA, res.data)
    }, (err) => {
        alert(err.message)
    })
}
