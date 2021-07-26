import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Picker, Button,ScrollView } from 'react-native';
import Classes_List from '../components/classes_list';
import Section_class from '../components/sections_class';
import DropDownPicker from 'react-native-dropdown-picker'
import PieChart from '../components/PieChart'
import Chart from '../components/Chart'
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from 'react-native-axios';

export default function Report() {
  const [reportAll, setReportAll] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [classs, setClasss] = useState(null);
  const [section, setSection] = useState(null);
  const [date, setDate] = useState(new Date())
  const [data, setData] = useState([]);

  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);




  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }

  const handleclick = async (id) => {
    const d = formatDate(date);
    let reqBody = {
      SectionId: section,
      date: d,
    };

    try {
      const l = await axios.post(
        "http://192.168.8.150:8000/api/countbystatus",
        reqBody
      );
      const result = l.data;
      setData(result);
    } catch (error) {
      console.log("BIG Error : ", error);
    }
  };

  useEffect(() => {
    handleclick();
  }, [date]);

  const stclassf = (c) => {
    setClasss(c)
  }
  const stsectionf = (c) => {
    setSection(c)
  }

  const [state, setState] = useState("");
  console.log(state);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };








  return (
    <View>
      <ScrollView>
      <Classes_List onChange={stclassf
      } />

      <Section_class idClass={classs}
        onChange={stsectionf} />


      <View style={styles.time} >
        <Button color="tomato"
          onPress={showDatepicker}
           title="Choose Date:" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Chart data={data} />
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: '#ff6347',
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: "#fff",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10
  },
  time:{
    width:150,
    marginBottom:15,
    color:"green"
  }
});