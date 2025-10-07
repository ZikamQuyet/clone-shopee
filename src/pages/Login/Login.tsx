import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='bg-orange'>
        <div className='px-4 mx-auto max-w-7xl'>
          <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='p-10 bg-white rounded shadow-sm'>
                <div className='text-2xl'>Đăng nhập</div>
                <div className='mt-8'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  />
                  <div className='mt-1 text-red-600 min-h[1.25rem] text-sm'></div>
                </div>
                <div className='mt-2'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  />
                  <div className='mt-1 text-red-600 min-h[1.25rem] text-sm'></div>
                </div>
                <div className='mt-2'>
                  <button className='w-full px-2 py-4 text-sm text-center text-white uppercase bg-red-500 rounded-sm hover:bg-red-600'>
                    Đăng nhập
                  </button>
                </div>
                <div className='flex items-center justify-center mt-8'>
                  <span className='mr-1 text-gray-400'> Bạn chưa có tài khoản?</span>
                  <Link className='text-red-400' to='/register'>
                    Đăng ký
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
