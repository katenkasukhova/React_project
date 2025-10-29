import { number } from 'framer-motion';
import React, { useState } from 'react'

const CalculatePage = () => {
    const [num1, setNum1] = useState(5);
    const [num2, setNum2] = useState((5));

    const plus = (a, b) => {
        return a + b;
    }
    
    const minus = (a, b) => {
    return a - b;
    }
    
    const multyply = (a, b) => {
    return a * b;  
    }
    
    const division = (a, b) => {
        if(b==0) {
            return 0;
        }
        return a / b
        }

    const [result, setResult] = useState('');

  return (
    <div>
        <div className='container' style={{maxWidth: 600}}>
            <h2>Вычислятор</h2>
    <div className='card'>
        <div className='card-body'>
            <div className='row g-3 mb-3'>
               
                <div className='col-md-6'>
                    <label className='form-label'>Число 1</label>
                    <input 
                    type='number'
                    className='form-control'
                    value={num1}
                    onChange={(e) => setNum1(number(e.target.value))}></input>
                </div>

                <div className='col-md-6'>
                    <label className='form-label'>Число 2</label>
                    <input 
                    type='number'
                    className='form-control'
                    value={num1}
                    onChange={(e) => setNum2(number(e.target.value))}></input>
                </div>
            </div>

            <div className='d-flex gap-2 mb-3'>
                <button 
                className='btn btn-success flex-fill'
                onClick={() => setResult(String(plus(num1, num2)))}
                >+</button>

                <button 
                className='btn btn-success flex-fill'
                onClick={() => setResult(String(minus(num1, num2)))}
                >-</button>

                <button 
                className='btn btn-success flex-fill'
                onClick={() => setResult(String(multyply(num1, num2)))}
                >*</button>

                <button 
                className='btn btn-success flex-fill'
                onClick={() => setResult(String(division(num1, num2)))}
                >/</button>                                                
            </div>

            <div className='mb-2'>
                <label className='form-label mb-1'>Результат</label>
                <input 
                type='text'
                className='form-control'
                value={result}
                readOnly
                placeholder='Что-то насчитали'/>
            </div>
        </div> 
    </div>        
    </div>
</div>
  )
}
export default CalculatePage