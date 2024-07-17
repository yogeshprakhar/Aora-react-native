import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={[{ id: 1 }, { id: 1 }, { id: 1 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item, index }) => (
          <Text key={index} className="text-3xl">
            {item.id}
          </Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6"> 
            <View>
              <Text>Welcome Back</Text>
              <Text>Again here</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Home