import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View>
                <Image style={styles.validate}
                    source={require('../../assets/hw.png')}
                />
            </View>
            <View style={styles.btns}>
                <View>

                    <TouchableOpacity
                        style={styles.btnConnection}
                        onPress={() => navigation.navigate('Connexion')}

                    >
                        <Text style={styles.textConnection}>Se connecter</Text>
                    </TouchableOpacity>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    btns:{
        justifyContent:'center',
    },
    validate: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    btnConnection: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#306ec2',
        padding: 10,
        width: 150,
        alignItems: 'center',
        marginBottom:15

    },
    btnRegister: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: "#fff",
        padding: 10,
        width: 150,
        alignItems: 'center'
    },
    textConnection: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    textRegister: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default HomeScreen;