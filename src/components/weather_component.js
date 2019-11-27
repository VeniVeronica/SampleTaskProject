import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome';


class weather_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tableHead: ['Date:DD/MM/YYYY'],
        tableHead1: ['Temperature'],
        tableHead2:['Min', 'Max'],
        tableHead3:['XX.XX', 'XX.XX'],
        tableData: [
        ['Pressure', 'XXXX.XX'],
        ['Humidity', 'XX.XX']
        ]
    };
  }

  render() {
    const state = this.state;
    return (  
      <View style={styles.container}>
      <ScrollView>
        <Text style={{color:'#ff6600', fontSize:40, fontWeight:'bold', margin:5}}> Weather in your city </Text>
        <View style={{flex:0.1}}>
         <View style={{flex:1,flexDirection:'row', margin:5}}>
          <TextInput style={[styles.buttons, {flex:0.7, fontSize:22, fontWeight:'400', paddingLeft:20}]} placeholder="Visakhapatnam" placeholderTextColor='grey'></TextInput>
          <Text style={{flex:0.3, justifyContent:'center', alignItems:'center'}}><Icon name='spinner' color="grey" size={40}/>
          </Text>
        </View>
        </View>
        <TextInput style={styles.buttons1}>
        <Icon name='question-circle' color="white" size={20}/>
        <Text style={{fontSize:20, fontWeight:'400', paddingLeft:20, margin:5, color:'white'}}>Search</Text>
        </TextInput>
        <Table borderStyle={{borderWidth: 2, borderColor:'black'}} style={{ margin:10}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Row data={state.tableHead1} style={[styles.head, {backgroundColor:'grey'}]} textStyle={styles.text}/>
          <Row data={state.tableHead2} style={[styles.head, {backgroundColor:'grey'}]} textStyle={styles.text}/>
           <Row data={state.tableHead3} style={[styles.head, {backgroundColor:'grey'}]} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        <Table borderStyle={{borderWidth: 2, borderColor:'black'}} style={{ margin:10}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Row data={state.tableHead1} style={[styles.head, {backgroundColor:'grey'}]} textStyle={styles.text}/>
          <Row data={state.tableHead2} style={[styles.head, {backgroundColor:'grey'}]} textStyle={styles.text}/>
          <Row data={state.tableHead3} style={[styles.head, {backgroundColor:'grey'}]} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        <Table borderStyle={{borderWidth: 2, borderColor:'black'}} style={{ margin:10}} >
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Row data={state.tableHead1} style={[styles.head, {backgroundColor:'grey'}]} textStyle={styles.text}/>
          <Row data={state.tableHead2} style={[styles.head, {backgroundColor:'grey'}]} textStyle={styles.text}/>
          <Row data={state.tableHead3} style={[styles.head, {backgroundColor:'grey'}]} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        </ScrollView>       
      </View> 
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttons:{
        borderWidth:1,
        padding:5,
        borderColor: '#ff6600',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        marginRight:20,
        marginLeft:40
    },
    buttons1:{
        borderWidth:1,
        padding: 10,
        borderColor: '#ff6600',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#D26C22',
        marginLeft:120,
        marginRight:120
    },
    head: {  height: 40,  backgroundColor: '#ff6600'  },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28},
    text: { textAlign: 'center', fontSize:18}
})
export default weather_component;
