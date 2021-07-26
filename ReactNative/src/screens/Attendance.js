import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, FlatList, ActivityIndicator, Picker, TouchableOpacity, ScrollView } from 'react-native'
import Classes_List from '../components/classes_list';
import Section_class from '../components/sections_class'
import { DataTable } from 'react-native-paper';
import axios from "react-native-axios";
import StudentCard from "../components/StudentCard"
function Attendance() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [classs, setClasss] = useState(null);
  const [section, setSection] = useState(null);
  const [student, setStudent] = useState([]);
  const [status, setStatus] = useState("");
  const [attendance, setAttendance] = useState([]);

  let today = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var dayName = days[d.getDay()];

  // sudo php artisan serve --host 192.168.8.150 --port 80

  const handleclick = async (id, status) => {
    let reqBody = {
      StudentId: id,
      SectionId: section,
      status: status,
    };
    setStatus("");

    try {
      const l = await axios.post(`http://192.168.8.150:8000/api/addsattendance`, reqBody)

      if (l) {
        let attendance = [...student].filter(st => st.id !== id);
        setStudent(attendance);
      }
    } catch (error) {
      console.log("BIG Error : ", error);
    }

  }

  const getStudentbyDate = async () => {
    await axios.get(`http://192.168.8.150:8000/api/studentattendance`).then((res) => {
      const result = res.data;
      setAttendance(result);
    });
  };

  const getstudentbysection = () => {
    fetch(`http://192.168.8.150:8000/api/studentbysection/${section}`)
      .then((response) => response.json())
      .then((json) => setStudent(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getstudentbysection(),
      getStudentbyDate()
  }, [section]);

  const stclassf = (c) => {
    setClasss(c)
  }
  const stsectionf = (c) => {
    setSection(c)
  }

  console.log('st', status)
  return (
    <ScrollView>

      <View style={{ flex: 1, padding: 24 }}>
        <Text style={styles.datee}>
          {dayName +
            "-" +
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate()}
        </Text>
        <Classes_List onChange={stclassf
        } />

        <Section_class idClass={classs}
          onChange={stsectionf}
        />
        {isLoading ? <Text>Loading...</Text> :
          (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>


            <DataTable>

              <DataTable.Header>
                <DataTable.Title>First Name</DataTable.Title>
                <DataTable.Title>Last Name</DataTable.Title>
                <DataTable.Title>status</DataTable.Title>
                <DataTable.Title>Action</DataTable.Title>

              </DataTable.Header>

              {student.filter(student => {
                return !attendance.find(item => {
                  return item.StudentId === student.id
                })
              }).map(st => (
                <StudentCard
                  FName={st.FName}
                  LName={st.LName}
                  id={st.id}
                  handleclick={handleclick}
                />
              ))}

            </DataTable>





          </View>
          )}
      </View>
    </ScrollView>
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
export default Attendance
