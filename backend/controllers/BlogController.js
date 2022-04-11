//import model

import BlogModel from "../models/BlogModel.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    console.log(`getAllBlogs ${blogs.length} results`);
    res.json({
      results: blogs, msg: blogs.length
        ? blogs.length == 1
          ? '1 resultado'
          : `${blogs.length} resultados`
        : 'Sin resultados'
    })
  } catch (err) {
    console.log(`Ocurrió un err getAllBlogs ${err.message}`);
    res.json({ err: 'Ocurrió un error', msg: err.message })
  }
}

export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: { id: req.params.id }
    })
    console.log(`getBlog ${blog.length} results`);
    res.json({
      results: blog[0], msg: blog.length
        ? blog.length == 1
          ? '1 resultado'
          : `${blog.length} resultados`
        : 'Sin resultados'
    })
  } catch (err) {
    console.log(`Ocurrió un err getBlog ${err.message}`);
    res.json({ err: 'Ocurrió un error', msg: err.message })
  }
}

export const createBlog = async (req, res) => {
  try {
    console.log(req.body);
    await BlogModel.create(req.body)
    console.log('createBlog Ok');
    res.json({ msg: 'Registro exitoso' })

  } catch (err) {
    console.log(`Ocurrió un err createBlog ${err.message}`);
    res.json({ err: 'Ocurrió un error', msg: err.message })
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
    res.json({ msg: 'Registro actualizado' })

  } catch (err) {
    console.log(`Ocurrió un err updateBlog ${err.message}`);
    res.json({ err: 'Ocurrió un error', msg: err.message })
  }
}

export const deleteBlog = async (req, res) => {
  try {
    console.log(`where ${req.params.id}`);
    await BlogModel.destroy({
      where: { id: req.params.id }
    })
    console.log('deleteBlog Ok');
    res.json({ msg: 'Registro eliminado' })

  } catch (err) {
    console.log(`Ocurrió un err deleteBlog ${err.message}`);
    res.json({ err: 'Ocurrió un error', msg: err.message })
  }
}