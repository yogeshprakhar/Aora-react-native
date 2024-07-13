import { Text, View } from 'react-native'
import { Slot,Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack ">Aora</Text>
      <StatusBar style="auto" />
      <Link href={"/home"}>Go to Profile</Link>
    </View>
  );
}

export default index

// const styles = StyleSheet.create({
//     container:{
//         display:'flex',
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center'
//     }
// })