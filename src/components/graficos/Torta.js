import React, { Fragment, PureComponent, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell, Tooltip } from 'recharts';

// const colors = ["#17A606", "#A60606", "#a2a2a2", "#FFE20C"];

const Torta = ({
  data,
  colors,
  nameTable
}) => {

  const total = data.reduce((acc, item) => acc + item.value, 0);

  useEffect(() => { }, [data])

  const round = (num, decimales) => ((num / total) * 100).toFixed(decimales)

  const calcPorcent = (item) => total == 0 ? 0 : round(item.value, 2)

  return (
    <div className='row'>
      <div className='col-7'>
        <div className='w-100' style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Legend />
              <Tooltip />
              <Pie dataKey="value"
                data={data}
                fill="#8884d8"
                label >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='col-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{nameTable}</th>
              <th scope="col">#</th>
              <th scope="col">%</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) =>
            (
              <tr key={index}>
                <td scope="row">{item.name}</td>
                <td>{item.value}</td>
                <td>{item.value != 0 ? calcPorcent(item) + "%" : 0 + "%"}</td>
              </tr>
            )
            )}
            <tr>
              <th>Total</th>
              <th>
                {total}
              </th>
              <th>
                {total == 0 ? "0%" : "100%"}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Torta;
