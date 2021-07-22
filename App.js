import React, { useState } from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';


const Tela = styled.View`
  flex: 1;
  align-items: center;
`

const Titulo = styled.Text`
  font-size: 25px;
  margin-top: 15px;
`

const Input = styled.TextInput`
  width: 90%;
  background-color: #c4c4c4;
  height: 50px;
  font-size: 25px;
  margin-top: 20px;
  padding-left: 15px;
  border-radius: 15px;
`

const CalcularBotao = styled.Button``

const CalcularView = styled.View`
  margin-top: 50px;
`

const ResultadoView = styled.View`
  background-color: green;
  margin-top: 50px;
  padding: 24px;
  align-items: center;
  border-radius: 10px;
`

const ResultadoTexto = styled.Text`
  font-size: 20px;
`

export default function App() {
  const [peso, alteraPeso] = useState('80');
  const [altura, alteraAltura] = useState('1.84');
  const [imc, alteraIMC] = useState(0);
  const [categoria, alteraCategoria] = useState('Normal');
  const calcularIMC = () => { 
    const indice = ( parseFloat(peso) / (  parseFloat(altura) *  parseFloat(altura))  );
    alteraIMC(indice.toFixed(1));
    if (indice < 18.5) {
      alteraCategoria('Magreza');
    } else if ( indice < 24.9) {
      alteraCategoria('Normal');
    } else if ( indice < 29.9) {
      alteraCategoria('Sobrepeso');
    } else if ( indice < 39.9) {
      alteraCategoria('Obesidade');
    } else {
      alteraCategoria('Obesidade Grave');
    }
   }

  return (
    <Tela>
      <Titulo>Calculadora de IMC</Titulo>
      <Input placeholder="Peso" keyboardType="numeric" value={peso} onChangeText={ (p) => {alteraPeso(p)} } />
      <Input placeholder="Altura" keyboardType="numeric" value={altura} onChangeText={ (a) => {alteraAltura(a)} } />
      <CalcularView>
        <CalcularBotao title="Calcular" onPress={ calcularIMC } />
      </CalcularView>
      <ResultadoView>
        <ResultadoTexto>{imc}</ResultadoTexto>
        <ResultadoTexto>{categoria}</ResultadoTexto>
      </ResultadoView>
    </Tela>
  );
}

