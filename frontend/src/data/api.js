import axios from 'axios'
const URL = 'http://localhost:8000/blogs'

export const getBlogs = async () => {
  try {
    const { data } = await axios.get(URL)
    return data
  } catch (err) {
    console.error(`err api.js getBlogs ${err.message}`)
  }
}

export const deleteBlog = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}/${id}`)
    return data
  } catch (err) {
    console.error(`err api.js deleteBlog ${err.message}`)
  }
}

export const createBlog = async (form, headers) => {
  try {
    const { data } = await axios.post(`${URL}`, form, headers ? headers : {})
    return data
  } catch (err) {
    console.error(`err api.js createBlog ${err.message}`)
  }
}

export const updateBlog = async (form, id, headers) => {
  try {
    const { data } = await axios.put(`${URL}/${id}`, form, headers ? headers : {})
    return data
  } catch (err) {
    console.error(`err api.js updateBlog ${err.message}`)
  }
}