/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import OneToOneCallPage from '../pages/OneToOneCallPage';
import Home from '../pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import GroupCallPage from '../pages/GroupCallPage';

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="OneCall" component={OneToOneCallPage} />
                <Stack.Screen name="GroupCall" component={GroupCallPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;