import React, { useState, useEffect } from "react";

import { getBlogs } from '../data/api.js'
import BlogCreateEdit from "../components/BlogCreate.js";
import ShowBlogs from "../components/BlogShow.js";
import { sortCustom } from "../helpers/Sort.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [register, setRegister] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    consultarBlogs()
  }, [])

  const consultarBlogs = async () => {
    const { results, msg } = await getBlogs()
    const sort = await results.sort(sortCustom([{ key: 'id', desc: true }]));
    setBlogs(sort)
    setTitle(msg.title)
  }



  return (
    <div className="container-fluid" >
      <div className="row justify-content-center" >
        <div className="col-md-4" >
          <BlogCreateEdit
            register={register}
            setRegister={setRegister}
            consultarBlogs={consultarBlogs}
          />
        </div>
        <div className="col-md-8" >
          <div className="card">
            <div className="card-header">
              {title}
            </div>
            <div className="card-body">
              <ShowBlogs
                data={blogs}
                setRegister={setRegister}
                consultarBlogs={consultarBlogs}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;