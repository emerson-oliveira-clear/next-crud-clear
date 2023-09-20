import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Carlos', 12, '2'),
    new Cliente('Beca', 65, '3'),
    new Cliente('Gilson', 26, '4'),
    new Cliente('Agatha', 40, '5'),

  ]

  return (
    <div className={`
    flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
  `}>

      <Layout titulo='Cadastro Simples'>

        <Tabela clientes={clientes}> </Tabela >

       

      </Layout>
    </div>
  )
}
