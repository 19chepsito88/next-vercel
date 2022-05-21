import Link from 'next/link'
import React from 'react'
import MainLayout from '../../components/layouts/MainLayout'

const index = () => {
  return (
   <MainLayout>
        <h1>Pricing Home</h1>
      <h1 className="title">
        Ir a<Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/pricing.js</code>
      </p>
   </MainLayout>
  )
}

export default index