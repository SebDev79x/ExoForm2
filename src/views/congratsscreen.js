import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/* 2. Get the param */
const CongratsScreen = ({ route, navigation }) => {
    
    const { data } = route.params;

    const BackToHome = () => {
        return setTimeout(() => {
            navigation.navigate('Accueil')

        }, 4000)
    }
    return (
        <View style={styles.container}  >
            <Image style={styles.validate}
                source={require('../../assets/verifie.png')}
            />
            <View style={styles.alignitems}>
                <Text>Vos informations ont bien été enregistrées !</Text>
                <Text>En voici le récapitulatif :</Text>
            </View>
            <View>
                <Text><Text>Genre :</Text> {data.civil}</Text>
                <Text><Text>Prénom :</Text> {data.firstname}</Text>
                <Text><Text>Nom :</Text> {data.lastname}</Text>
                <Text><Text>Email :</Text> {data.email}</Text>
                <Text><Text>Password :</Text> {data.password}</Text>

                <Text><Text>Date de naissance :</Text> Pas né, comme les poissons !</Text>
            </View>
            <View>
                <Text>YOUPI !!!! C'est trop la teuf !!!!</Text>
                <Text>Votre compte a été créé avec succès !</Text>
            </View>
            <BackToHome />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    validate: {
        width: 100,
        height: 100
    },
    alignitems: {
        alignItems: 'center'
    }
});

export default CongratsScreen;