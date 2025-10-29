import React from 'react'
import {motion} from 'framer-motion';

const DescriptionPage = () => {
   
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, x: -20},
        visible: {
            opacity: 1,
            x:0,
            transition: {
                duration: 0.4
            }
        }
    };


    const itemVariants_reverse = {
        hidden: {opacity: 0, x: 20},
        visible: {
            opacity: 1,
            x:0,
            transition: {
                duration: 0.4
            }
        }
    };

  return (
    <div>
        <div className='row'>
            <div className='col-12'>
                <h2 className='text-center mb-5'>Мое описание</h2>
            </div>
        </div>
        
        <div className='row justify-content-center'>
            <div className='col-md-10'>
                <div className='card shadow-lg border-0' style={{
                    borderRadius: '15px',
                    overflow: 'hidden'
                }}>
                
                <div className='card-body p-0'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <div className='h-100 d-flex align-items-center justify-content-center'
                                style={{background: 'linear-gradient(135deg, #d14409 20%, #027201 80%) '}}>
                                   <div className='text-center p-4'>
                                        <img src="/images/frog2.1.jpg"
                                        alt="лягушенька"
                                        className='img-fluid rounded-circle shadow-lg mb-3'
                                        style={{
                                            width: '200px',
                                            height: '200px',
                                            objectFit: 'cover'
                                        }}
                                        onMouseEnter={(event) => event.target.style.transform = 'scale(1.2)'}
                                        onMouseLeft={(event) => event.target.style.transform = 'scale(1)'}

                                        >
                                        </img>
                                        <h4 className='text-white'>Василиса Премудрая</h4>
                                        <p></p>
                                    </div> 
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div className='p-5'>
                                    <div className='mb-4'>
                                        <h3 className='text-pemary mb-'>Личные данные</h3>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <p className='mb-2'><b>full name</b> Ekaterina Sukhova</p>
                                                <p className='mb-2'><b>age</b> 44</p>
                                                <p className='mb-2'><b>city</b> Moscow</p>                
                                            </div>

                                            <div className='col-md-6'>
                                            <p className='mb-2'><b>email</b> vasya@mail.ru</p>
                                            <p className='mb-2'><b>cell</b> 123456789</p>
                                            <p className='mb-2'><b>status</b> <span className='badge bg-warning'> in progress </span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <motion.div
                                        className="mb-4"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible">
                                        <h4 className='text-success mb-3'>Технические навыки</h4>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <h6>BackEnd</h6>
                                                <div className='mb-2'>
                                                    <motion.span variants={itemVariants} className='badge bg-success me-1'>React</motion.span>
                                                    <motion.span variants={itemVariants} className='badge bg-success me-1'>JavaScript</motion.span>
                                                    <motion.span variants={itemVariants} className='badge bg-success me-1'>Git</motion.span>

                                                </div>
                                                <div className='mb-2'>

                                                    <motion.span variants={itemVariants} className='badge bg-warning me-1'>HTML</motion.span>
                                                    <motion.span variants={itemVariants} className='badge bg-warning me-1'>CSS</motion.span>
                                                </div>                                                
                                            </div>

                                            
                                            <div className='col-md-6'>
                                                <h6>FrontEnd</h6>
                                                <div className='mb-2'>
                                                    <motion.span variants={itemVariants_reverse} className='badge bg-primary me-1'>React</motion.span>
                                                    <motion.span variants={itemVariants_reverse} className='badge bg-primary me-1'>JavaScript</motion.span>
                                                    <motion.span variants={itemVariants_reverse} className='badge bg-primary me-1'>Git</motion.span>

                                                </div>
                                                <div className='mb-2'>

                                                    <motion.span variants={itemVariants_reverse} className='badge bg-secondary me-1'>HTML</motion.span>
                                                    <motion.span variants={itemVariants_reverse} className='badge bg-secondary me-1'>CSS</motion.span>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </motion.div>



                                     <div className='mb-4'>
                                        <h3 className='text-warning mb-'>Образование</h3>

                                        <div className='card bg-light'>
                                            <div className='card-body'>
                                                <h5>NASA</h5>
                                                <p className='mb-2'>long long time ago </p>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DescriptionPage
