import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Picker } from 'react-native';

export default function Sections_class(props) {

    const [section, setSection] = useState([]);
    const[state,setState]=useState("");
    useEffect(() => {
    fetch(`http://192.168.8.150:8000/api/sec-class/${props.idClass}`)
      .then((response) => response.json())
      .then((json) => setSection(json))
      .catch((error) => console.error(error))
  }, [props.idClass]);




  const sendSection=(l)=>{
    props.onChange(l);
    setState(l)
  }
    return (
<View>
        <Picker
                style={{ color: '#ff6347',width:200 }}
                selectedValue={state}
         onValueChange={ (l)=>sendSection(l)
         }
        >
                  <Picker.Item label="select section" value={null} /> 
            {section.map(section => (
      <Picker.Item label={section.Description} value={section.id} /> 
    
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