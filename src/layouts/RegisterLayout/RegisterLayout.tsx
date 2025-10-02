import React from 'react'
import RegisterHeader from '../../components/RegisterHeader'
import Footer from '../../components/Footer'

interface IProps {
  children?: React.ReactNode
}
const RegisterLayout = ({ children }: IProps) => {
  return (
    <>
      <RegisterHeader />
      {children}
      <Footer />
    </>
  )
}

export default RegisterLayout
