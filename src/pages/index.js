import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Landpage from './landpage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Landpage />
    </>
  )
}
