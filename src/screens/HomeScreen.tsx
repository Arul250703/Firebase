import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([
    { id: '1', name: 'Nasi Goreng', image: 'https://i.pinimg.com/474x/8e/3e/f5/8e3ef5742d9d7334acb03872f239db20.jpg' },
    { id: '2', name: 'Mie Ayam', image: 'https://i.pinimg.com/474x/6c/9c/fb/6c9cfbda40f0d15572fb59e4ad30965e.jpg' },
    { id: '3', name: 'Bakso', image: 'https://i.pinimg.com/474x/f7/6c/93/f76c93a3a23c2666e107ada4c4f33aec.jpg' },
    { id: '4', name: 'Nasi Padang', image: 'https://i.pinimg.com/474x/4b/94/68/4b94680222487b212836a9e2e5e3a541.jpg' },
    { id: '5', name: 'Ayam Bakar', image: 'https://i.pinimg.com/474x/80/3c/bc/803cbcabba9e4f43b52ea660ac726b90.jpg' },
    { id: '6', name: 'jus mangga', image: 'https://i.pinimg.com/474x/f6/39/ea/f639eaaef2d049dfc8c7a9beba5aaf60.jpg' },

  ]);

  const filteredFoods = foods.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()));

  const renderFoodItem = ({ item }: any) => (
    <TouchableOpacity style={styles.foodItem} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DAFTAR MENU</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari Makanan..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filteredFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
        numColumns={2}  // Membuat dua kolom untuk tampilan grid
        columnWrapperStyle={styles.gridRow}  // Menambahkan padding antar kolom
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF6347',  // Warna oranye
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    width: '80%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  foodItem: {
    marginBottom: 20,
    marginHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  foodImage: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  gridRow: {
    justifyContent: 'space-between',  // Memastikan item tersebar rata
  },
});

export default HomeScreen;
