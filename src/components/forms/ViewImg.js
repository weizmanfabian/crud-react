import React, { Fragment, useState, useEffect } from 'react';



const ViewImg = ({ data }) => {


  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Img</th>
        </tr>
      </thead>
      <tbody>
        <img alt="not fount" width={"250px"} src={'http://localhost:5000/images/img-1644076137493-fuego.jpg'} />
        {data.map(
          (item, index) => (
            <tr key={index}>
              <td scope="row">
                <img alt="not fount" width={"250px"} src={item.url} />
                {/* <img alt="not fount" width={"250px"} src="imgtyt/1643989202077-imgtyt-code.png" /> */}
                {/* <img alt="not fount" width={"250px"} src='../../../../public/1643993718751-imgtyt-fuego.jpg' /> */}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default ViewImg;