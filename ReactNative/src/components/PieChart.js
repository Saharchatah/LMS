import React,{useState,useEffect} from 'react';
import { VictoryPie, VictoryTooltip, VictoryLabel, VictoryChart, VictoryScatter, VictoryTheme,VictoryGroup,VictoryBar } from "../screens/Victory";
import { Text, View, StyleSheet,Picker} from 'react-native';


export default function PieChart(){
      const[reportAll,setReportAll]=useState([])
      const [isLoading, setLoading] = useState(true);

      function reportAlls(){
        fetch('http://192.168.8.150:8000/api/countallstudentattendance')
          .then((response) => response.json())
          .then((json) => setReportAll(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }
    
      useEffect(() => {
        reportAlls();
      }, []);

      
      return (
        
        <View> 
        {isLoading ? <Text>Loading...</Text> : 
            (<View>
             
            <Text style={styles.title}>Attendace for all students</Text>
            <VictoryPie 
                        data={reportAll}
                        x="value"
                        y="value"
    
             colorScale={["tomato", "orange", "green"]}
             
             />
        
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
          <View style={{display:'flex',flexDirection:'row'}}><View style={{width:25,height:25,backgroundColor:"green",margin:10}}></View><Text style={{marginTop:10}}>Present</Text></View>
          <View style={{display:'flex',flexDirection:'row'}}><View style={{width:25,height:25,backgroundColor:"tomato",margin:10}}></View><Text style={{marginTop:10}}>Absenece</Text></View>
          <View style={{display:'flex',flexDirection:'row'}}><View style={{width:25,height:25,backgroundColor:"orange",margin:10}}></View><Text style={{marginTop:10}}>Late</Text></View>
        </View>
            </View>
            
        )
        }
            </View>
         
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      title:{
        color:'#ff6347',
        fontSize:22,
        textAlign:'center',
        backgroundColor:"#fff",
        fontWeight:"bold",
        padding:10,
        borderRadius:10
       }
    });