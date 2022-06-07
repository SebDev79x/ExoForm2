import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,ScrollView } from 'react-native';
import { useForm, Controller } from "react-hook-form";


const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = data => {
    console.log(typeof (data));
    console.log(data)
    console.log(data.password);
    console.log(data.email);
  };
  return (
    // remettre IMAGE et style hauteur
    <View style={styles.container}>
      <View style={styles.picContainer}>
        <Image style={styles.pic}
          source={require('../../assets/Sunset-rafiki.png')} />
      </View>
      <View style={[styles.blocksRegister]}>
        <View style={[styles.column, { marginBottom: 10 }]}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Champ requis'
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email invalide'
              },
              /* validate: 
                value => value === getValues('email') || 'email youpi' */
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                mode="flat"
                placeholder="Entrez votre email"
                placeholderTextColor={'grey'}

              />
            )}

            name="email"
          />
          <Text style={styles.errors}>{errors.email && errors.email.message}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Mot de passe</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Champ requis'
              },

              /* validate: 
                value => value === getValues('email') || 'email youpi' */
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                mode="flat"
                placeholder="Entrez votre mot de passe"
                placeholderTextColor={'grey'}
              />


            )}
            name="password"
          />
          <Text>{errors.password && errors.password.message}</Text>
        </View>

        <View style={styles.connection}>
          <TouchableOpacity
            style={styles.btnConnection}
            title="Submit" onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.textConnection}>Se connecter</Text>
          </TouchableOpacity>
          <View>
            <Text style={{ color: 'white' }}>Pas encore inscrit ? <Text style={styles.linkAccount}
            >Créez un compte </Text></Text>
          </View>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#8CC0DE'
  },
  input: {
    height: 40,
    backgroundColor: '#fcf5d9',
    width: '100%',
    fontSize: 18,
    borderRadius:10
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    marginBottom: 10,
    color: '#FAF0D7',
    fontSize: 20,
    fontWeight: 'bold',

  },
  blocksRegister: {
    flex: .5,
    marginBottom: 20,
    flexDirection: 'column',
    /*     borderColor: 'yellow',
     */
  },
  btnConnection: {
    /* '#306ec2' */
    backgroundColor: '#FFA8A8',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 18
  },
  textConnection: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  linkAccount: {
    color: '#FAF0D7',

  },
  pic: {
    width: 250,
    height: 250,
  },
    picContainer: {
      flex: .4,
    
    },
  connection: {
    alignItems: 'center',
    marginTop: 20
  },
  errors: {
    color: 'red'
  }
});

export default LoginScreen;