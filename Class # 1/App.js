import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, ScrollView, FlatList, TouchableOpacity} from 'react-native';

export default function App() {

  const [inputData, setInputData] = useState('')
  const [todolist, setTodoList] = useState([])

  const AddTodo = ()=>{
    setTodoList(prevValue => [...prevValue, {key : Date.now().toString(), data :inputData}]);
    console.log(inputData);
  }

  const deleteTodo = (id)=>{
    setTodoList(prevValue => prevValue.filter(item => item.key !== id));
  }
  return (
    <View style={styles.container}>
      <View>
      <TextInput style={styles.input} value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
      <Button title='ADD' onPress={AddTodo}/>
      </View>

      <View>
        <FlatList data={todolist} renderItem={(item)=> <TouchableOpacity onPress={deleteTodo.bind(this, item.item.key)}><Text style={styles.listItem}>{item.item.data}</Text></TouchableOpacity>
        }/>
      </View>

      {/* <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: 'center'}}>
        {todolist.map((item, index)=>(
          <Text key={item + index} style={styles.listItem}>{item}</Text>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10
   },
   listItem:{
     padding: 10,
     margin:10,
     backgroundColor: '#ccc',
     borderColor: '#000',
     borderStyle: 'solid',
     borderWidth: 1,
     width: '80%'
   },
   scrollView :{
    width: '100%',
    alignItems: 'center'
  }
});
