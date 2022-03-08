import React, { useEffect, useState } from 'react'

let styleError = {
  fontWeight: "bold",
  color: "#dc3545",
};

let styleImage = {
  height: '10em',
  width: 'auto '
}

export const Image = ({
  value,
  handleChange,
  required,
  disabled,
  name,
  id,
  classNameInput,
  classNameDiv,
  label,
  route,
  isEdit,
  remove,
}) => {


  return (
    <div className={classNameDiv}>
      <div className="row">
        <label className="">{label}</label>
        {value && (
          <div className="col-12 text-center">
            <img alt="not fount" style={styleImage} src={isEdit ? `${route}/${value}` : URL.createObjectURL(value)} />
          </div>
        )}
        <div className="col-9 mt-2">
          <input
            type="file"
            className={classNameInput}
            id={id}
            name={name}
            onChange={handleChange}
            required={required}
            disabled={disabled}
          />
        </div>
        {value && (
          <div className="col-3 mt-2">
            <button className="btn btn-danger" disabled={isEdit ? true : false} onClick={() => remove(id)}>Remove</button>
          </div>
        )}
      </div>
    </div>
  )

}


export const Input = ({
  classNameDiv,
  label,
  classNameLabel,
  value,
  name,
  classNameInput,
  type,
  required,
  onChange,
  maxLength,
  onBlur,
  id,
  disabled,
  err,
  placeholder,
}) => {
  const [error, setError] = useState(err);
  useEffect(() => { setError(err) }, [err])

  return (
    // <Fragment>
    <div className={classNameDiv}>
      <small className={classNameLabel}>{label}</small>
      <input
        value={value}
        className={classNameInput}
        type={type}
        name={name}
        required={required}
        onChange={onChange}
        maxLength={maxLength}
        onBlur={onBlur}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
      />
      {err && <p style={styleError}>{error}</p>}
    </div>
  )
}

export const Select = ({
  items,
  classNameDiv,
  label,
  classNameLabel,
  value,
  name,
  classNameSelect,
  required,
  onChange,
  onBlur,
  id,
  disabled,
  err,
}) => {
  const [error, setError] = useState(err);
  useEffect(() => { setError(err) }, [err])

  return (
    // <Fragment>
    <div className={classNameDiv}>
      <small className={classNameLabel}>{label}</small>
      <select
        value={value}
        className={classNameSelect}
        name={name}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        disabled={disabled}
      >
        <option selected disabled value="">
          Seleccione
        </option>
        {items.map(
          (item, index) => <option key={index} value={item}>{item}</option>
        )}
      </select>
      {err && <p style={styleError}>{error}</p>}
    </div>
  )
}

export const Textarea = ({
  classNameDiv,
  label,
  classNameLabel,
  value,
  name,
  classNameInput,
  type,
  required,
  onChange,
  maxLength,
  onBlur,
  id,
  disabled,
  err,
  placeholder
}) => {
  const [error, setError] = useState(err);
  useEffect(() => { setError(err) }, [err])

  return (
    // <Fragment>
    <div className={classNameDiv}>
      <small className={classNameLabel}>{label}</small>
      <textarea
        value={value}
        className={classNameInput}
        type={type}
        name={name}
        required={required}
        onChange={onChange}
        maxLength={maxLength}
        onBlur={onBlur}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
      />
      {err && <p style={styleError}>{error}</p>}
    </div>
  )
}

