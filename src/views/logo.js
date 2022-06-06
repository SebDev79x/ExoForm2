import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

const logo = () => {

  return(<View>
    <Image style={styles.validate}
        source={require('../../assets/Sunset-cuate.png')}
    />
</View>)  
  
  };
  const styles = StyleSheet.create({

 validate: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
})
  export default logo;