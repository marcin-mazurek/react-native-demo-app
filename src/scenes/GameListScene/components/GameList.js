import React from 'react';
import { Text, FlatList, View, Image, TouchableOpacity } from 'react-native';

const styles = {
  container: { flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#aaa' },
  image: { width: 70, height: 70 },
  textWrapper: { flex: 1, marginLeft: 15, justifyContent: 'center', marginRight: 10 },
  text: { fontSize: 25, color: '#555' }
};

const renderItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.key)}>
    <View style={styles.container}>
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default props => (
  <FlatList data={props.games}
    renderItem={item => renderItem({ ...item, onPress: props.onPress })} />
);
