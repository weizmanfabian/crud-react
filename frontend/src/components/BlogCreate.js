import { useEffect } from "react";
import Swal from "sweetalert2";
import { createBlog, updateBlog } from "../data/api";
import { useForm } from "../hooks/useForm";
import { Input } from "./forms/Input";

const BlogCreateEdit = ({ register, setRegister, consultarBlogs }) => {

  const initialForm = {
    title: '',
    content: ''
  }

  const validationForm = (form) => {
    let errors = {};
    if (!form.title) {
      errors.title = 'Campo requerido'
    }
    if (!form.content) {
      errors.content = 'Campo requerido'
    }
    return errors;
  }

  const {
    form,
    setForm,
    errors,
    handleChange,
    handleBlur,
    loading
  } = useForm(initialForm, validationForm)

  const submit = async (e) => {
    e.preventDefault();
    const errResult = await validationForm(form);

    if (Object.keys(errResult).length === 0) {
      const data = await register
        ? updateBlog(form, register.id)
        : createBlog(form)
      const { msg, err } = await data
      Swal.fire(msg)
      if (err) {
        console.error(err)
        return false;
      } else {
        setForm(initialForm)
        setRegister()
        consultarBlogs();
      }
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (register) {
      setForm({
        title: register.title,
        content: register.content
      })
    }
  }, [register])



  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <button
          style={{ width: '70px' }}
          className="btn btn-primary"
          onClick={() => { setForm(initialForm); setRegister(''); }}
        >
          <i className="fa-solid fa-circle-plus"></i>
        </button>
        <h2>{!register ? 'Registrar Blog' : 'Actualizar Blog'}</h2>
        <Input
          classNameDiv="col-md-6"
          label="Título"
          classNameInput="form-control"
          type="text"
          maxLength="150"
          // required="true"
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyUp={handleBlur}
          name="title"
          value={form.title}
          err={errors.title}
        />
        <Input
          classNameDiv="col-md-6"
          label="Contenido"
          classNameInput="form-control"
          type="text"
          maxLength="150"
          // required="true"
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyUp={handleBlur}
          name="content"
          value={form.content}
          err={errors.content}
        />
        {loading &&
          <h2>{register ? 'Actualizando' : 'Guardando'}</h2>}
        <button className={`btn btn-${register ? 'success' : 'primary'} col-md-4`}>{register ? 'Actualizar' : 'Guardar'}</button>
      </div>
    </form>
  );
}

export default BlogCreateEdit;