import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView,StyleSheet, Image,FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function StartScreen() {
  const navigation = useNavigation();
  const [chair, setChair] = useState([]);
  useEffect(() => {
    const fetchChair = async () => {
      try {
        const response = await fetch('https://6758dfd960576a194d120d05.mockapi.io/sanpham');
        const data = await response.json();
        setChair(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchChair();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.priceStarContainer}>
        <Text style={styles.price}>{item.price}</Text>
       
      </View>
      
    </View>
  );

  
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", height: 500 }}>
      {/* <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subtitle}>Log into your </Text> */}

      {/* Banner Component */}
      <View style={styles.bannerContainer}>
          <Image source={require('../assets/image/background.jpg')} style={styles.banner} />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Renovate your interior</Text>
            {/* <Text style={styles.bannerText}>Feel free to consult with one of our experienced {'\n'} doctors for personalized advice.</Text> */}
          <TouchableOpacity style={styles.bannerText}>Go to catalog</TouchableOpacity>
          </View>
    </View>
    

</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    
  },
  
  
  
  
  
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  orText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    padding: 3,
  },
  socialIcon: {
    width: 50,
    height: 44,
  },

  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: 350,
    marginBottom: 20,
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerContent: {
    position: 'absolute',
    bottom: 150,
    left: 50,
  },
  bannerTitle: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    
    justifyContent:'center'

  },
  bannerText: {
    color: '#fff',
    fontSize: 32,
    width:200,
    backgroundColor:'blue',
    borderRadius:5
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  priceStarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: '#1a73e8',
  },

  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  greeting: {
    color: '#1a73e8',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  seeAll: {
    color: '#1a73e8',
    fontSize: 16,
  },
});
