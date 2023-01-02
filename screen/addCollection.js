import { async } from '@firebase/util';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { addCollection, addspending, getspending } from '../api/firebaseApi';

export const Add = () => {

    const [name, setName] = useState('')
    const [note, setNote] = useState('')

    const handle = () => {
        addCollection({ money: name, note: note })
        setNote('')
        setName('')
        console.log(note, name)
    }
    return (<>

        <View>
            {/* <Button title='Add default' onPress={handle} ></Button> */}
            <name>
                Ten
            </name>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type here to add money!"
                onChangename={newname => setName(newname)}
                defaultValue={name}

            />
            <name>
                ghi chu
            </name>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type here to note!"
                onChangeText={newText => setNote(newText)}
                defaultValue={note}
            />
            <Button title='add transaction' onPress={handle}>

            </Button>

        </View>

    </>)
}