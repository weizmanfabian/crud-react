//import model

import BlogModel from "../models/BlogModel.js";

import msg from './msg.controller.js'

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    console.log(`getAllBlogs ${blogs.length} results`);
    msg.get.title = blogs.length
      ? blogs.length == 1
        ? '1 resultado'
        : `${blogs.length} resultados`
      : 'Sin resultados'
    msg.get.icon = 'info'
    res.json({
      results: blogs, msg: msg.get
    })
  } catch (err) {
    console.log(`Ocurrió un err getAllBlogs ${err.message}`);
    msg.get.title = 'Ocurrió un error'
    msg.get.icon = 'error'
    res.json({ err: err.message, msg: msg.get })
  }
}

export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: { id: req.params.id }
    })
    console.log(`getBlog ${blog.length} results`);
    msg.get.title = blog.length
      ? blog.length == 1
        ? '1 resultado'
        : `${blog.length} resultados`
      : 'Sin resultados'
    msg.get.icon = 'info'
    res.json({
      results: blog[0], msg: msg.get
    })
  } catch (err) {
    console.log(`Ocurrió un err getBlog ${err.message}`);
    msg.get.title = 'Ocurrió un error'
    msg.get.icon = 'error'
    res.json({ err: err.message, msg: msg.get })
  }
}

export const createBlog = async (req, res) => {
  try {
    console.log(req.body);
    await BlogModel.create(req.body)
    console.log('createBlog Ok');
    res.json({ msg: msg.create })

  } catch (err) {
    console.log(`Ocurrió un err createBlog ${err.message}`);
    res.json({ err: err.message, msg: msg.errCreate })
  }
}

export const updateBlog = async (req, res) => {
  try {
    console.log(req.body);
    console.log(`where ${req.params.id}`);
    await BlogModel.update(req.body, {
      where: { id: req.params.id }
    })
    console.log('updateBlog Ok');
    res.json({ msg: msg.update })

  } catch (err) {
    console.log(`Ocurrió un err updateBlog ${err.message}`);
    res.json({ err: err.message, msg: msg.errUpdate })
  }
}

export const deleteBlog = async (req, res) => {
  try {
    console.log(`where ${req.params.id}`);
    await BlogModel.destroy({
      where: { id: req.params.id }
    })
    console.log('deleteBlog Ok');
    res.json({ msg: msg.delete })

  } catch (err) {
    console.log(`Ocurrió un err deleteBlog ${err.message}`);
    res.json({ err: err.message, msg: msg.errDelete })
  }
}