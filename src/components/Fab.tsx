import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl' | 'cn';
  onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {
  const ios = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.75}
          style={setPosition(position)}
          onPress={onPress}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const android = () => {
    return (
      <View style={setPosition(position)}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#28425B', false, 26)}
          onPress={onPress}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

const setPosition = (position: string) => {
  switch (position) {
    case 'bl':
      return styles.fabLocationBL;
    case 'br':
      return styles.fabLocationBR;
    default:
      return styles.fabLocationCN;
  }
};

const styles = StyleSheet.create({
  fabLocationBL: {
    position: 'absolute',
    bottom: 40,
    left: 30,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
  fabLocationCN: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
    alignItems: 'center',
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
