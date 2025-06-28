import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface SliderGroupProps {
    min: number;
    max: number;
    value: number;
    onValueChange: (value: number) => void;
}

export const SliderGroup: React.FC<SliderGroupProps> = ({ min, max, value, onValueChange }) => (
    <View style={styles.container}>
        <Slider
            minimumValue={min}
            maximumValue={max}
            value={value}
            onValueChange={onValueChange}
            step={1}
            style={styles.slider}
        />
        <Text>Valor: {value}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { marginVertical: 8, alignItems: 'center' },
    slider: { width: '80%', height: 40 },
});