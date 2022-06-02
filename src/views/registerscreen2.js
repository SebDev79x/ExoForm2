import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import SelectDropdown from 'react-native-select-dropdown'

const RegisterScreen2 = ({ route,navigation }) => {
    const { dataFirstScreen } = route.params;
console.log("2ème écran",dataFirstScreen)
    // Menu dropdown => Civilité par défaut
    const [gender, setGender] = useState("Aucun choix effectué");
    // Menu dropdown => Liste des civilités
    const civils = ["M.", "Mme", "Mlle", "Non genré"]

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            civil: '',
            firstname: '',
            lastname: '',
            birthday: ''
        }
    });
    const onSubmit = (data) => {
        console.log("data soread", data);
        data.civil = gender
        data.email = dataFirstScreen.email
        data.password = dataFirstScreen.password
        console.log("data", data)
        return navigation.navigate('congrats',{data
        })
    };
    return (
        <View style={styles.container}>
            <Text>SUITE FORMULAIRE</Text>
            <View >
                <View>
                    <Text>Civilité</Text>
                </View>

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <SelectDropdown
                              rules={{
                                  required: {
                                      message: 'Champ requis'
                                  },
                              }}
                            data={civils}
                            dropdownBackgroundColor='grey'
                            onBlur={onBlur}
                            value={value}
                            
                            onSelect={(selectedItem, index) => {
                                console.log("choix effectué onselect", selectedItem);
                                return setGender(selectedItem)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                console.log("Choix effectué", selectedItem)
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                console.log("Possibilités", item)
                                return item
                            }}
                        />
                    )}
                    name="civil"
                />
                <Text>{errors.civil && errors.civil.message}</Text>
            </View>


            <View>
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
                            mode="outlined"
                            placeholder="Prénom"
                        />
                    )}
                    name="firstname"
                />
                <Text>{errors.firstname && errors.firstname.message}</Text>
            </View>


            <View>
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
                            mode="outlined"
                            placeholder="Nom"
                        />
                    )}
                    name="lastname"
                />
                <Text>{errors.lastname && errors.lastname.message}</Text>
            </View>


            {/* <View>
            <Text style={styles.label}>Date de naissance</Text>
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
                        mode="outlined"
                        placeholder="Date de naissance"
                    />
                )}
                name="birthday"
            />

            <Text>{errors.birthday && errors.birthday.message}</Text>
        </View> */}
            <Button title="Submit" onPress={handleSubmit(onSubmit)}
            />
            {/*         <Button title="Open" onPress={() => setOpen(true)} />
 */}
            <View>

            </View>



        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#306ec2'
    },
    label: {
        marginBottom: 10
    },
    input: {
        height: 40,
        borderWidth: 2,
        borderRadius: 10
    },
    dropdown: {
        borderWidth: 2,
        borderRadius: 10
    },
    inputs: {
        marginBottom: 20,
        flexDirection: 'column',

        justifyContent: 'space-around'
    },
    civils: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RegisterScreen2;