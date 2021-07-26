import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, ActivityIndicator, Picker, TouchableOpacity, ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper';

export default function StudentCard(props) {
    const [status, setStatus] = useState("");

    const test = () => {
        props.handleclick(props.id, status)
        setStatus("")
    }

    return (

        <View>
            <DataTable.Row>
                <DataTable.Cell>{props.FName}</DataTable.Cell>
                <DataTable.Cell>{props.LName}</DataTable.Cell>
                {/* <DataTable.Cell> */}
                <Picker
                    style={{ color: '#ff6347', width: 110 }}
                    selectedValue={status}
                    onValueChange={(l) => { setStatus(l) }
                    }
                >
                    <Picker.Item label="status" value={null} />
                    <Picker.Item label="Present" value="Present" />
                    <Picker.Item label="Late" value="Late" />
                    <Picker.Item label="Absent" value="Absent" />


                </Picker>

                {/* </DataTable.Cell> */}

                <DataTable.Cell>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => test()}
                    >
                        <Text style={{ color: '#fff' }}
                        >Done</Text>
                    </TouchableOpacity>

                </DataTable.Cell>
            </DataTable.Row>
        </View>

    );

}
const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor: '#ff6347',
        borderRadius: 10,
        padding: 6,
        margin: 2,
        textAlign: 'center'
    },
    datee: {
        color: '#ff6347',
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: "#fff",
        fontWeight: "bold",
        padding: 10,
        borderRadius: 10
    }
})