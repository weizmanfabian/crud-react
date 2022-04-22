import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e, funcion) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    if (funcion) {
      funcion();
    }
  };

  const handleBlur = (e, funcion) => {
    handleChange(e, () => { });
    setErrors(validateForm(form));
    if (funcion) {
      funcion();
    }
  };


  // si no hay funcion enviar 0
  // * e  e button
  // * form: objeto a guardar
  // * actionServer: funcion a ejecutar con el post
  const handleSubmit = async (
    e,
    form,
    actionServer,
  ) => {
    e.preventDefault();
    setLoading(true);
    let errResult = await validateForm(form);

    if (Object.keys(errResult).length === 0) {
      try {
        const res = await actionServer();
        setLoading(false)
        return res;
      } catch (err) {
        console.error(
          `Ocurrió un error al realizar el post del hook useForm:  Err: ${err}`
        );
        setLoading(false)
      }
    } else {
      setLoading(false)
      return false;
    }

  };

  return {
    form,
    setForm,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    loading,
  };
};
