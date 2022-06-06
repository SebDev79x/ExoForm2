import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, Button, Platform,TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';


const DatePickerComponent = (props) => {

  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('')
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    props.onSelectDate(currentDate)
    setDate(currentDate);
    let tempDate = new Date(currentDate)
    let formatedDate = tempDate.getDate() + '/' + (tempDate.getMonth()) + '/' + (tempDate.getFullYear())
    setText(formatedDate)
    props.onSelectDate(currentDate)

  };

  const showMode = () => {
    setShow(true)
    setMode('date')
  };

  return (
    <View >
      <Text style={styles.text}>{text}</Text>

      <View style={styles.center2}>
                <TouchableOpacity
                    style={styles.btnPass}
                    onPress={() => showMode('date')} title="Date"                    >
                    <Text style={styles.textPass}>Choisir une date</Text>
                </TouchableOpacity>
            </View>


     {/*  <View >
        <Button title="Date" color="blue" onPress={() => showMode('date')} />
      </View> */}
      {show && (
        <DateTimePicker
          value={date}
          testID='dateTimePicker'
          is24Hour={true}
          mode={mode}
          selected={date}
          display='default'
          onChange={onDateChange}
        />
      )}
    </View>
  );

}

const styles = StyleSheet.create({


  text: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#fcf5d9',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
    borderTopWidth:0,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:3,
    borderBottomColor:'#FAF0D7'
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
  btnPass: {
    /* '#306ec2' */
    backgroundColor: '#68A7AD',
    padding: 10,
    width: 200,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 18
  },
  textPass: {
    color: '#fcf5d9',
    fontWeight: 'bold',
    fontSize: 20
  },
  center2: {
    alignItems: 'center',
  },

});

export default DatePickerComponent;