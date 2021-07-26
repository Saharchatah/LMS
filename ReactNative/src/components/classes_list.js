import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';

export default function Classes_List(props) {

    const [classes, setClasses] = useState([]);
    const [state, setState] = useState("");


    useEffect(() => {
        fetch('http://192.168.8.150:8000/api/getclassforsection')
            .then((response) => response.json())
            .then((json) => setClasses(json))
            .catch((error) => console.error(error))
    }, []);


    const sendclass = (l) => {
        props.onChange(l);
        setState(l)
    }
    return (
        <View>
            <Picker
                style={{ color: '#ff6347',width:200 }}
                selectedValue={state}
                onValueChange={(l) => sendclass(l)
                }
            >
                <Picker.Item label="select class" value={null} />
                {classes.map(classe => (
                    <Picker.Item label={classe.Description} value={classe.id} />

                ))}
            </Picker>


            {/* <select onChange={props.onChange} id="outside" >
            <option
                value={null}
            >
                Classes
            </option>
            {classes.map(classe => (
                <option
                    selected={props.id === classe.id}
                    key={classe.id}
                    value={classe.id}
                >
                    {classe.Description}
                </option>
            ))}
        </select> */}
        </View>
    );
}