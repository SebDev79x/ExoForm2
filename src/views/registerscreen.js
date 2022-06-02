import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const RegisterScreen = ({route,navigation}) => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      password2:''
    }
  });
/*   const test = {email:'popo@pop.pop',password:'pop'}
  const infos = [{email:'popo@pop.pop',password:'pop'},{email:'youpi@pop.pop',password:'popo'}]
  const findMember = (array,object)=>{
    if(array.includes(object)){
       console.log("youpi");
       console.log(object);

    }
     console.log("Nooooooo");
  }
console.log(findMember(infos,test)); */
  const onSubmit = dataFirstScreen => {
    console.log(dataFirstScreen,"1er écran");
    return navigation.navigate('InscriptionSuite',{dataFirstScreen})
  };


/*   const youpi = (string, string2) =>{
     
  } */
  return (

    <View style={styles.container}>
      <Text style={styles.form}>FORMULAIRE</Text>
      <Text style={styles.label}>Email</Text>

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Champ requis'
          },
          pattern:{
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
      
     

      <Text style={styles.label}>MDP</Text>

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

      <Text style={styles.label}>Confirmation du MDP</Text>

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
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            placeholder="Entrez votre mot de passe"
            
          />
        )}
        name="password2"
      />
      <Text>{errors.password2 && errors.password2.message}</Text>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} 
      />
{/* <Button 
title="Test, go forward"
onPress={() => navigation.navigate('InscriptionSuite')}
/> */}



      {/*  <View style={styles.inputs}>

        <View style={styles.column}>

       
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput style={styles.input}
     
            mode="outlined"
            placeholder="Entrez votre mot de passe"
            keyboardType="numeric"
          />
        </View>


        <View>
          <TouchableOpacity
            style={styles.btnRegister}
            onChangeText={text => setPassword(text)}

            onPress={() => navigation.navigate('InscriptionSuite')}
            title="Valider"
            name="password"
            secureTextEntry

            value={password}
          >
            <Text style={styles.textRegister}>S'inscrire</Text>
          </TouchableOpacity>
        </View>


      </View> */}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'red'
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderRadius: 10
  },
  column: {
    flexDirection: 'column'
  },
  label: {
    marginBottom: 10
  },
  inputs: {
    marginBottom: 20,
    flexDirection: 'column',

    justifyContent: 'space-around'
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
    borderRadius: 1
  },
  textConnection: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  form: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#306ec2'
  }
});

export default RegisterScreen;