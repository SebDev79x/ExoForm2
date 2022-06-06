import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Logo from './logo'
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        style={styles.btnConnection}
                        onPress={() => navigation.navigate('Connexion')}
                    >
                        <Text style={styles.textConnection}>Se connecter</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Logo />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.btnRegister}
                        onPress={() => navigation.navigate('Inscription')}
                    >
                        <Text style={styles.textRegister}>S'inscrire</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF0D7',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
  /*   btns: {
        justifyContent: 'center',
        alignItems: 'center',

    }, */
 

    btnConnection: {
       
        /* '#306ec2' */
        backgroundColor: '#FFD9C0',
        padding: 10,
        width: 150,
        alignItems: 'center',
        borderRadius:10

    },
    btnRegister: {
        backgroundColor: '#F4BFBF',
        padding: 10,
        width: 150,
        alignItems: 'center',
        borderRadius:10
    },
    textConnection: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    textRegister: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default HomeScreen;