import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Test from './test'
import SelectDropdown from 'react-native-select-dropdown'

const RegisterScreen2 = ({ route, navigation }) => {
    const { dataFirstScreen } = route.params;
    console.log("2ème écran", dataFirstScreen)
    // Menu dropdown => Civilité par défaut
    const [gender, setGender] = useState("Aucun choix effectué");
    // Menu dropdown => Liste des civilités
    const civils = ["M.", "Mme", "Mlle", "Non genré","Robot","Macron"]
    const [birthday, setBirthday] = useState("Aucun choix effectué");

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            civil: '',
            firstname: '',
            lastname: '',
            birthday: '',
            email: dataFirstScreen.email,
            password: dataFirstScreen.password,
            password2: dataFirstScreen.password2
        }
    });

    const handleNewDate = (selectedDate) => {
        setBirthday(selectedDate.toLocaleDateString('fr-FR'))
    }

    const onSubmit = (data) => {
        let tempDate = new Date(birthday)
        let formatedDate = tempDate.getDate() + '/' + (tempDate.getMonth()) + '/' + (tempDate.getFullYear())
        data.civil = gender
        data.birthday = formatedDate
        console.log('birthday', formatedDate)
        data.email = dataFirstScreen.email
        data.password = dataFirstScreen.password
        navigation.navigate('congrats', { data })
    };

    return (
        <View style={styles.container}>
            <View style={[styles.column]}>
                <Text style={styles.label}>Civilité</Text>

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <SelectDropdown
                            rules={{
                                required: {
                                    message: 'Champ requis'
                                },
                            }}
                            buttonTextStyle={styles.dropdown1BtnTxtStyle}
                            buttonStyle={styles.dropdown3BtnStyle}
                            defaultButtonText={'Genre'}
                            data={civils}
                            onBlur={onBlur}
                            value={value}
                            onSelect={(selectedItem, index) => {
                                setGender(selectedItem)
                            }}
                        />
                    )}
                    name="civil"
                />
                <Text style={styles.errors}>{errors.civil && errors.civil.message}</Text>
            </View>


            <View style={styles.column}>
                <Text style={styles.label}>Prénom</Text>

                <Controller
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Champ requis'
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            mode="flat"
                            placeholder="Saisissez votre prénom"
                            placeholderTextColor={'grey'}
                        />
                    )}
                    name="firstname"
                />
                <Text style={styles.errors}>{errors.firstname && errors.firstname.message}</Text>
            </View>

            <View style={styles.column}>
                <Text style={styles.label}>Nom</Text>

                <Controller
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Champ requis'
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            mode="flat"
                            placeholder="Saisissez votre nom"
                            placeholderTextColor={'grey'}

                        />
                    )}
                    name="lastname"
                />
                <Text style={styles.errors}>{errors.lastname && errors.lastname.message}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Date de naissance</Text>
                <Controller
                    control={control}
                    rules={{
                        required: {
                            value: false
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Test
                            onChange={onChange}
                            onSelectDate={(handleNewDate)}
                        />
                    )}
                    name="birthday"
                />
                <Text style={styles.errors}>{errors.birthday && errors.birthday.message}</Text>
            </View>



            <View style={styles.center2}>
                <TouchableOpacity
                    style={styles.btnPass}
                    onPress={handleSubmit(onSubmit)} title="Submit"                    >
                    <Text style={styles.textPass}>Valider</Text>
                </TouchableOpacity>
            </View>



            {/* <Button title="Submit" onPress={handleSubmit(onSubmit)}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#96C7C1',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        marginBottom: 10,
        color: '#FAF0D7',
        fontWeight: 'bold',
        fontSize: 20,

    },
    labelDate: {
        color: 'black',
        fontSize: 20
    },
    input: {
        height: 40,
        backgroundColor: '#fcf5d9',

        fontSize: 18,
        borderRadius: 10,
        padding: 10
    },

    inputs: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    civils: {
        /*    justifyContent: 'center',
           alignItems: 'center' */
    },
    errors: {
        color: 'red'
    },
    btnPass: {
        /* '#306ec2' */
        backgroundColor: '#CCF3EE',
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
    dropdown3BtnStyle: {
        height: 50,
        backgroundColor: '#68A7AD',
        paddingHorizontal: 0,
        borderRadius: 18,
        borderColor: '#444',
        
      },
      dropdown1BtnTxtStyle:{
        color: '#fcf5d9',
        fontWeight: 'bold',
        fontSize: 20,

      }
});

export default RegisterScreen2;