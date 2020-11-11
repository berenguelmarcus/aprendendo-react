import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'
import LoginControl from './LoginControl'
import NumberList from './ListItem'

const numbers = [1, 2, 3, 4, 5];
export default props => (
  <div className="App">
    <Card titulo="#Aula - ListItem">
      <NumberList numbers={numbers} />
    </Card>
    <Card titulo="#Aula - LoginControl Condicional c/ class">
      <LoginControl />
    </Card>
    <Card titulo="#06 - Condicional v2">
      <CondicionalComIf numero={8} />
    </Card>
    <Card titulo="#05 - Condicional v1">
      <Condicional numero={11} />
    </Card>
    <Card titulo="#04 - Repetição">
      <Repeticao />
    </Card>
    <Card titulo="#03 - Componente Com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
        <p>Utilize props.children</p>
      </ComFilhos>
    </Card>
    <Card titulo="#02 - Com Parametros">
      <ComParametro titulo="Título passado por parâmetro {props.titulo}"
        subtitulo="O que for posto entre chaves será interpretado como JavaScript" />
    </Card>
    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
)