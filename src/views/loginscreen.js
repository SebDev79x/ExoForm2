import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.picContainer}>
        <Image style={styles.pic}
          source={require('../../assets/sand.png')}
        />
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
                message: 'email invalide'
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
                mode="outlined"
                placeholder="Entrez votre email"

              />
            )}

            name="email"
          />
          <Text>{errors.email && errors.email.message}</Text>
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
              mode="outlined"
              placeholder="Entrez votre mot de passe"
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
            <Text>Pas encore inscrit ? <Text style={styles.linkAccount}
            >Créer un compte</Text></Text>
          </View>
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
    justifyContent: 'space-around'
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderRadius: 18,
  },
  column: {
    flexDirection: 'column'
  },
  label: {
    marginBottom: 10
  },
  blocksRegister: {
    flex:.5,
    marginBottom: 20,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'yellow',

  },
  btnConnection: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#306ec2',
    padding: 10,
    width: 150,
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 18

  },
  textConnection: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  linkAccount: {
    color: '#306ec2',

  },
  pic: {
    width: 250,
    height: 220,
    resizeMode:'contain'
  },
  picContainer: {
    flex: .5,
    height: 250,
    borderWidth: 2,
    borderColor: 'red',
  },
  connection: {
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    marginTop: 20
  }
});

export default LoginScreen;