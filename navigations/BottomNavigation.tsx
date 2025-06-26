import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CalculadoraScreen from '../screens/CalculadoraScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Welcome" 
                component={WelcomeScreen} 
                options={{headerShown : true}}
                />
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
        </Tab.Navigator>
    )
}

export default function NavegadorBottom(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}