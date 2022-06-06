import * as React from 'react';
import { StyleSheet, Text, View, Image,Card } from 'react-native';
const CongratsScreen = ({ route, navigation }) => {

    const { data } = route.params;
    /* const youpi = data.birthday
    youpi = youpi.ToLocale */
    /*   const BackToHome = () => {
          return setTimeout(() => {
              navigation.navigate('Accueil')
  
          }, 20000)
          <BackToHome />
      } */
    return (
        <View style={styles.container}>
                <View>
                    <Text style={[styles.text, { marginBottom: 10 }]}>Inscription réussie !</Text>
                    </View>

<View>
    <Image style={styles.validate} source={require('../../assets/verifie.png')} />
    </View>

<View>
    <Text>La bienvenu {data.firstname} {data.lastname}</Text>
{/* <View><Text style={[styles.text, { marginBottom: 10 }]}>En voici le récapitulatif :</Text></View>
<Card></Card>
<View style={styles.infos}>
<Text style={styles.labels1}>Civilité :</Text>
<Text style={styles.labels2}>{data.civil}</Text>
</View>
<View style={styles.infos}>
<Text style={styles.labels1}>Prénom :</Text>
<Text style={styles.labels2}>{data.firstname}</Text>
</View><View style={styles.infos}>
<Text style={styles.labels}>Nom :</Text>
<Text style={styles.labels}>{data.lastname}</Text>
</View><View style={styles.infos}>
<Text style={styles.labels}>Email :</Text>
<Text style={styles.labels}>{data.email}</Text>
</View><View style={styles.infos}>
<Text style={styles.labels}>Password :</Text>
<Text style={styles.labels}>{data.password}</Text>
</View><View style={styles.infos}>
<Text style={styles.labels}>Password2 :</Text>
<Text style={styles.labels}>{data.password2}</Text>
</View><View style={styles.infos}>
<Text style={styles.labels}>Date de naissance :</Text>
<Text style={styles.labels}>{data.birthday}</Text>
</View> */}
                {/* <View><Text><Text style={styles.labels}>Prénom :</Text> {data.firstname}</Text></View>
                <View><Text><Text style={styles.labels}>Nom :</Text> {data.lastname}</Text></View>
                <View><Text><Text style={styles.labels}>Email :</Text> {data.email}</Text></View>
                <View><Text><Text style={styles.labels}>Password :</Text> {data.password}</Text></View>
                <View><Text><Text style={styles.labels}>Password2 :</Text> {data.password2}</Text></View>
                <View><Text><Text style={styles.labels}>Date de naissance :</Text>{data.birthday}</Text></View> */}
            </View>
            <View>
                <Text>Pour rappel, vous êtes né le {data.birthday}</Text>
                <Text>Votre email est : {data.email}</Text>
<Text>Bonne navigation ! </Text>
            </View>
            {/* <View style={{ display: 'none' }}>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDF0EA',
        alignItems: 'center',
    },
    validate: {
        width: 100,
        height: 100
    },
    alignitems: {
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    labels1:{
        fontWeight: 'bold',
        justifyContent:'flex-start'

    },
    labels2:{
        fontWeight: 'bold',
        justifyContent:'center'


    },
    infos:{
        flexDirection:'row',
        justifyContent:'space-around',
    }
});

export default CongratsScreen;