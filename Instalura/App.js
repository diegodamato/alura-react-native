import React, { Fragment } from 'react';
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native'
import {Foto} from './src/Components/Foto';
import {Cabecalho} from './src/Components/Cabecalho';

const largura = Dimensions.get("screen").width;

const informacoes = [
    {id:1, usuario:"Ricardo"},
    {id:2, usuario:"Marina"},
    {id:3, usuario:"Ricardo"},
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        keyExtractor = {(item) => item.id.toString()}
        renderItem={({item}) =>       
          <Fragment>
            <Cabecalho nomeUsuario={item.usuario} />
            <Foto/>
          </Fragment>}
      />
    </ScrollView>
  );
};

const estilo = StyleSheet.create({
  imagem:{
    width:largura,
    height:largura
  }
})

export default App;
