import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CheckboxGroupProps {
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, selected, onChange }) => {
    const toggleOption = (option: string) => {
        if (selected.includes(option)) {
            onChange(selected.filter(item => item !== option));
        } else {
            onChange([...selected, option]);
        }
    };
    return (
        <View style={styles.container}>
            {options.map(option => (
                <TouchableOpacity key={option} style={styles.option} onPress={() => toggleOption(option)}>
                    <View style={[styles.box, selected.includes(option) && styles.checked]} />
                    <Text style={styles.label}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    option: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
    box: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#333',
        marginRight: 8,
    },
    checked: { backgroundColor: '#333' },
    label: { fontSize: 16 },
});