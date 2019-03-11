import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.response.use((res) => {
  return res.data
})

export let getSliders = () => {
  return axios.get('/sliders')
}

export let getHotBook = () => {
  return axios.get('/hot')
}

export let getBooks = () => {
  return axios.get('/book')
}

export let removeBook = (id) => {
  return axios.delete(`/book?id=${id}`)
}
