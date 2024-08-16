/* eslint-disable prettier/prettier */
import { View, Button, TextInput, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const onOneToOneCall = () => {

        if (id === '') {
            Alert.alert('please enter ID')
        }
        else if (name === '') {
            Alert.alert('please enter Name')
        }
        else {
            navigation.navigate('OneCall', { name: name, id: id });
            setId('');
            setName('');
        }
    };

    const onGroupCall = () => {

        if (id === '') {
            Alert.alert('please enter ID')
        }
        else if (name === '') {
            Alert.alert('please enter Name')
        }
        else {
            navigation.navigate('GroupCall', { name: name, id: id });
            setId('');
            setName('');
        }
    };

    return (
        <View>
            <TextInput style={styles.input} placeholder="Enter ID" value={id} onChangeText={(text) => setId(text)} />
            <TextInput style={styles.input} placeholder="Enter Name" value={name} onChangeText={(text) => setName(text)} />
            <View style={styles.button}>
                <Button title="One To One Call" onPress={onOneToOneCall} />
            </View>
            <View style={styles.button}>
                <Button title="Group Call" onPress={onGroupCall} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 20,
    },
    input: {
        margin: 20,
        borderColor: '#ccc',
        borderWidth: 2,
        paddingLeft: 10,
    }
})
export default Home;