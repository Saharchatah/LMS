import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Picker, Button } from "react-native";
import PieChart from '../components/PieChart'


import {
  VictoryPie,
  VictoryTooltip,
  VictoryLabel,
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryGroup,
  VictoryBar,
} from "../screens/Victory";


export default function Chart(props) {
  const [isLoading, setLoading] = useState(true);

if(props.data.length!=0){
  return (
    <View>
    
     

      
        <View>
          <VictoryChart domainPadding={30}
           >
            <VictoryBar 
            barWidth={({ index }) => index * 2 + 8}
            data={props.data}
             x="name" y="value"
            style={{ data: { 
              fill: "#c43a31",
               } }} />
          </VictoryChart>
        
        </View>
      

      
    </View>
  );
}else{
  return <PieChart/>
}
}

const styles = StyleSheet.create({
  victorychart:{
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});