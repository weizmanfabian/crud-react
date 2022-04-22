import Swal from "sweetalert2"
import { deleteBlog } from "../data/api"


const ShowBlogs = ({ data, setRegister, consultarBlogs }) => {

  const deleteRegister = async (register) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Va a eliminar el Blog ${register.title}. Desea continuar?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, Eliminar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let { msg, err } = await deleteBlog(register.id)
        Swal.fire(msg)
        if (!err) {
          consultarBlogs()
        }
      }
    })
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Fecha de Registro</th>
          <th scope="col">Fecha de Actualización</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (blog, index) => (
            <tr key={index}>
              <th>{blog.id}</th>
              <td>{blog.title}</td>
              <td>{blog.content}</td>
              <td>{blog.createdAt}</td>
              <td>{blog.updatedAt}</td>
              <td>
                <button
                  className='btn btn-warning'
                  onClick={() => { setRegister(blog); }}
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => { deleteRegister(blog) }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          )
        )}

      </tbody>
    </table>
  )
}

export default ShowBlogs