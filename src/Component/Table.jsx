import React from 'react';
import data from './dummyData.json';
const Table = () => {

    return(
    <>
    <h1 className="text-heading">
				Table
			</h1>
      <table border={1} className="table table-striped-columns">
        <thead className='table-head'>
          <tr>
          <th className=''>Id</th>
          <th className=''>Year</th>
          <th className=''>Medals</th>
          </tr>
        </thead>
      {data.map((items)=>{
        return(
          <tbody className='containerTable-body'>
          <tr>
          <td className=''>{items.Id}</td>
          <td className=''>{items.Year}</td>
          <td className=''>{items.Medals}</td>
          </tr>
          </tbody>
        )
      })}
      </table>
    </>)
    }
    export default Table;