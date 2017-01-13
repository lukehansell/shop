import React from 'react'
import Head from 'next/head'
import Header from '../presentation/header'
import BestSellers from '../containers/bestSellers'
import css from 'next/css'

const style = css({
  font: '1.15em Arial, sans-serif',
  color: '#3c3c3c'
})

export default () => (
  <div className={style}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    <BestSellers />
  </div>
)
