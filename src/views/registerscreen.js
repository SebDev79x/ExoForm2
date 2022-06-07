import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image, Input, TouchableOpacity,ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Logo from './logo'
import * as yup from 'yup';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
const loginValidationSchema = yup.object().shape({

  email: yup
    .string()
    .email('Saisissez un email valide')
    .required('Requis'),
  password: yup
    .string()
    .min(8, ({ min }) => `Minimum ${min} caractères`)
    .required('Requis')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Pattern non respecté"
    ),
  password2: yup
    .string()
    .min(8, ({ min }) => `Minimum ${min} caractères`)
    .required('Requis')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Pattern non respecté"
    )
});


const RegisterScreen = ({ route, navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [displayMessageForPSW, setDisplayMessageForPSW] = useState('')
  const verifyPSW = (el, el2) => {
    return el === el2
  }
  const vanish = (el) => {
    setTimeout((e) => {
      setDisplayMessageForPSW('')

    }, 3000)
  }
  /*   const { control, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
        email: '',
        password: '',
        password2: ''
      }
  
    });
   */
  /*   const onSubmit = dataFirstScreen => {
  
      console.log(dataFirstScreen, "1er écran");
  
       navigation.navigate('InscriptionSuite', { dataFirstScreen })
    };  */


  return (
    <View style={styles.container}>
     {/*  <View >
        <Image style={styles.pic}
          source={require('../../assets/Sunset-rafiki.png')} />
      </View> */}
      <Formik

        initialValues={{ email: '', password: '', password2: '' }}
        validateOnMount={true}
        onSubmit={dataFirstScreen => {
          console.log(dataFirstScreen.password);
          if (verifyPSW(dataFirstScreen.password, dataFirstScreen.password2)) {
            navigation.navigate('InscriptionSuite', { dataFirstScreen })
          }
          vanish(setDisplayMessageForPSW('NON'))
        }
        }
        validationSchema={loginValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, isValid, errors }) => (

          <View>
            <View>
              <View style={styles.center}>
                <Text style={styles.label}>Email</Text>
              </View>
<View><TextInput
                style={styles.input}
                mode="flat"
                placeholder="Entrez votre mail"
                placeholderTextColor={'grey'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}

              /></View>
              
              {(touched.email && errors.email) && <Text style={styles.errors}>{errors.email}</Text>}
            </View>

            <View style={{ height: 30 }}></View>

            <View>
              <View style={styles.center}>
                <Text style={styles.label}>Mot de passe</Text>
              </View>

              <View style={[styles.align,{justifyContent:'center'}]}>
                <View>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={showPassword}
                    mode="flat"
                    placeholder="Entrez un mot de passe"
                    placeholderTextColor={'grey'}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}

                  />
                </View>
                <View style={styles.end}>
                  <Icon color='#525E75' size={40} name={showPassword ? 'eye-slash' : 'eye'} onPress={() => setShowPassword(!showPassword)} />
                </View>
              </View>



              {(touched.password && errors.password) && <Text style={styles.errors}>{errors.password}</Text>}

            </View>
            <View style={{ height: 30 }}></View>

            <View>
              <View style={styles.center}>
                <Text style={styles.label}>Confirmation</Text>
              </View>

              <View style={styles.align}>
                <View>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={showPassword2}
                    mode="flat"
                    placeholder="Saisissez-le à nouveau"
                    placeholderTextColor={'grey'}
                    onChangeText={handleChange('password2')}
                    onBlur={handleBlur('password2')}
                    value={values.password2}

                  />
                </View>
                <View style={styles.end}>
                  <Icon size={40} color='#525E75' name={showPassword2 ? 'eye-slash' : 'eye'} onPress={() => setShowPassword2(!showPassword2)} />
                </View>
              </View>



              {(touched.password2 && errors.password2) && <Text style={styles.errors}>{errors.password2}</Text>}

            </View>
            <View><Text>{displayMessageForPSW}</Text></View>
            {/* <View>
<TextInput
              style={styles.input}
              secureTextEntry
              mode="flat"
              placeholder="Entrez votre mail"
              placeholderTextColor={'black'}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}

            />
</View> */}
<View style={styles.center2}>
<TouchableOpacity
                        style={styles.btnPass}
                        disabled={!isValid}
                        onPress={handleSubmit} title="Submit"                    >
                        <Text style={styles.textPass}>Valider</Text>
                    </TouchableOpacity>
</View>


            {/* <Button
              disabled={!isValid}
              onPress={handleSubmit} title="Submit" /> */}

          </View>

        )}
      </Formik>
      {/* <View>
        <Logo />
      </View>

      <View style={styles.column}>
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
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="flat"
              placeholder="Entrez votre mail"
              placeholderTextColor={'black'}
            />
          )}
          name="email"
        />
        <Text style={styles.errors}>{errors.email && errors.password.email}</Text>
      </View>


            <View style={{ height: 30 }}></View>


      <View style={styles.column}>
        <Text style={styles.label}>Mot de passe</Text>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Champ requis'
            }

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
              placeholderTextColor={'black'}
            />
          )}
          name="password"
        />
        <Text style={styles.errors}>{errors.password && errors.password.message}</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>Mot de passe</Text>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Champ requis'
            }
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
              placeholderTextColor={'black'}
            />
          )}
          name="password2"
        />
        <Text style={styles.errors}>{errors.password && errors.password.message}</Text>
      </View>
<View>

<Button title="Submit" onPress={handleSubmit(onSubmit)}/>

</View>
      <View>

        <TouchableOpacity
          style={styles.btnValidate}
          onPress={() => { handleSubmit(onSubmit) }}
        >
          <Text style={styles.textValidate}>Valider</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8CC0DE',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  input: {
/*     height: 40,
 */    backgroundColor: '#fcf5d9',
    color: 'black',
    fontSize: 18,
    borderRadius: 10,
padding:10
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    marginBottom: 10,
    color: '#FAF0D7',
    fontWeight:'bold',
    fontSize: 20,

  },

  inputs: {
/*     marginBottom: 10,
 */    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  btnValidate: {
    /* '#306ec2' */
    backgroundColor: 'yellow',
    padding: 10,
    width: 150,
    alignItems: 'center',
    borderRadius: 10

  },
  textValidate: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  errors: {
    color: 'red'
  },
  align: {
    flexDirection: 'row'
  },
  center: {
    alignItems: 'center'
  },
  center2: {
    alignItems: 'center',
    marginTop:15
  },
  btnPass: {
    /* '#306ec2' */
    backgroundColor: '#FFA8A8',
    padding: 10,
    width: 150,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 18
  },
  textPass: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  /* end :{
    alignItems:'flex-end'
  } */
/*   pic: {
    width: 180,
    height: 180,
    resizeMode: 'contain'
  },
    picContainer: {
      flex: .4,
    
    }, */
});

export default RegisterScreen;