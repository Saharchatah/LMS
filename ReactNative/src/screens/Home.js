import React ,{ useRef }from 'react'
import { StyleSheet, View, Text ,TouchableOpacity,Image,Animated,SafeAreaView,Button} from 'react-native'
import homepic from '../../assets/graduation-hat.png'

function Home(props) {

    const { navigation } = props
    
  return (
    <View style={styles.container}>
        <Image source={homepic} style={{ width: 200, height: 200 }}/>
        <View style={{backgroundColor:'#fff',padding:20,borderRadius:6}}>
        <Text style={styles.text}>Learning Hub</Text>
        </View>
      

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Attendance')}>
        <Text style={styles.buttonText}>Attendance</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Report')}>
        <Text style={styles.buttonText}>Report</Text>
      </TouchableOpacity>



     


    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#ff6347',
    textShadowColor:'#ff6347',
    fontSize: 50,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#ff6347',
    borderRadius: 10,
    padding:10,
    margin: 20,
    textAlign:'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign:'center'
  },




})

export default Home
