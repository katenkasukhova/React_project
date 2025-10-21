import React from 'react'

const TablePage = () => {
  return (
    <div>
    <h2>Tables:</h2>
    <table className="table table-hover">
        <thead className="table-dark">
            <tr className='table-dark'>
                <th>ФИО</th>
                <th>Почта</th>
                <th>Статус</th>

            </tr>
        </thead>
        <tbody>
            <tr className='table-success'>
                <td>Сухова Екатерина Александровна</td>
                <td>katenkasukhova@yandex.ru</td>
                <td><span className="badge bg-success"> Мега-Пользователь</span></td>
            </tr>      
            <tr className='table-warning'>
                <td>Сухова Екатерина Александровна</td>
                <td>katenkasukhova@yandex.ru</td>
                <td><span className="badge bg-warning"> Мега-Пользователь</span></td>


            </tr>      
            <tr className='table-danger'>
                <td>Сухова Екатерина Александровна</td>
                <td>katenkasukhova@yandex.ru</td>
                <td><span className="badge bg-danger"> Мега-Пользователь</span></td>
            </tr>      

        </tbody>
    </table>
    </div>
  )
}

export default TablePage