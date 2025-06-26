import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import FormularioScreen from '../screens/FormularioScreen';
import CalculadoraScreen from '../screens/CalculadoraScreen';
import { NavigationContainer } from '@react-navigation/native';
import UsuarioScreen from '../screens/UsuarioScreen';
import DireccionScreen from '../screens/DireccionScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Tab'>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tab" component={MyTabs} />
    </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
            initialRouteName='Direccion'
            screenOptions={{headerShown: false}}
            >
            <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
            <Tab.Screen name="Formulario" component={FormularioScreen} />
            <Tab.Screen name="Usuario" component={UsuarioScreen} />
            <Tab.Screen name="Direccion" component={DireccionScreen} />
        </Tab.Navigator>
    )
}

export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}