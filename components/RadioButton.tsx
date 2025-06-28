import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RadioButtonGroupProps {
    options: string[];
    selected: string;
    onSelect: (value: string) => void;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, selected, onSelect }) => (
    <View style={styles.container}>
        {options.map(option => (
            <TouchableOpacity key={option} style={styles.option} onPress={() => onSelect(option)}>
                <View style={[styles.circle, selected === option && styles.checked]} />
                <Text style={styles.label}>{option}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    option: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#333',
        marginRight: 8,
    },
    checked: { backgroundColor: '#333' },
    label: { fontSize: 16 },
});