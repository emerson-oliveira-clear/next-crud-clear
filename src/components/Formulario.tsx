import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "@/core/Cliente"
import Botao from "./Botao"



interface FormularioProps {

    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?:() => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (

                <Entrada
                    somenteLeitura
                    texto='codigo'
                    valor={id}
                    valorMudou={setNome}
                    className="mb-5"
                />

            ) : false}

            <Entrada
                texto='nome'
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />

            <Entrada
                texto='idade'
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-3">
                <Botao className="bg-gradient-to-r from-green-400 to-green-700 text-white  mr-2" 
                onClick={() => props.clienteMudou?.(new Cliente(nome,+idade,id))}>
                    {id ? 'Alterar' : 'Salvar' }
                </Botao>

                <Botao className="bg-gradient-to-r from-red-400 to-red-700 text-white " onClick={props.cancelado}>
                    Cancelar
                </Botao>

            </div>
        </div>
    )

}