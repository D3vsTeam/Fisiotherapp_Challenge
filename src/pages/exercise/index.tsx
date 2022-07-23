import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , Image, Button } from 'react-native';
import Person from "../../assets/hand.png";


let seriesNum=0;
export default function Exercise() {
  const [series,setSeries] = useState<Number>();

  function handleSeries(){
    seriesNum++;
    setSeries(seriesNum);
  }

  return (
    <View style={styles.container}>
        <View style={{padding: 30}}>
          <Image source={Person} style={styles.Imagem} />
          <Text style={{fontSize: 32, textAlign: 'center'}}>Fechar e Abrir as {'\n'} mãos</Text>
          {
          seriesNum >= 10
          ? <Button title='Você Conseguiu'color= 'green' onPress={handleSeries}  />
          : <Button title='Feito'color= '#5F48ED' onPress={handleSeries} />
          }
        </View>
        <View style={styles.Descricao}>
            <Text style={styles.TextDesc}>Séries</Text>
            <Text style={styles.TextDesc}>Repetições</Text>
            <Text style={styles.TextDesc}>Descanso</Text>
        </View>
        <View style={styles.Descricao2}>
            <Text style={styles.TextDesc2}>{seriesNum}</Text>
            <Text style={styles.TextDesc2}>10</Text>
            <Text style={styles.TextDesc2}>5 Seg</Text>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //CSS
  },
  Imagem: {
    //CSSz
  },
  Descricao:{
    //CSS
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 15
  },
  Descricao2:{
    //CSS
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 15
  },
  TextDesc:{
    fontSize: 24,
    marginLeft: 15,
    marginRight: 15,
  },
  TextDesc2:{
    fontSize: 24,
    marginLeft: 45,
    marginRight: 45,
    color: '#C95EB5'
  },
  Win: {
    color: 'Green'
  }
});

