import React from 'react'

const FormPage = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='text-center mb-5'>ФОРМЫ</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Форма регистрации</h4>
              <form>
                <div className='mb-3'>
                  <label className='form-label'>Имя</label>
                  <input type="text" placeholder="введите Имя" className='form-control'></input>
                </div>

                 <div className='mb-3'>
                  <label className='form-label'>Фамилия</label>
                  <input type="text"  placeholder="введите Фамилия" className='form-control'></input>
                </div>

                <div className='mb-3'>
                  <label className='form-label'>Отчество</label>
                  <input type="text" placeholder="введите Отчество" className='form-control'></input>
                </div>

                <button type="submit" className='btn btn-outline-primary'> submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-header'>
              <h4>Обратная связь</h4>
            </div>
            <div className='card-body'>
              <form>
              <div className='mb-3'>
                <label className='form-label'>Оцените наш сервис</label>
                <select className='form-select'>
                  <option value="">Выберите оценку</option>
                  <option value="1">⭐</option>
                  <option value="2">⭐⭐ </option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>

                <label className='form-label'>Комментарии</label>
                <textarea
                className='form-control'
                rows="5"
                placeholder='Ваш отзыв'></textarea>

              </div>
              <button type='submit' className='btn btn-outline-primary'> Оставить отзыв</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FormPage