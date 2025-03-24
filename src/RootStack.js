import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import FirstScreen from "./Screens/FirstScreen";
import SecondScreen from "./Screens/SecondScreen";
import ThirdScreen from "./Screens/ThirdScreen";
import FourthScreen from "./Screens/FourthScreen";
import FifthScreen from "./Screens/FifthScreen";
import SixthScreen from "./Screens/SixthScreen";
import SeventhScreen from "./Screens/SeventhScreen";
import RegisterScreen from "./Screens/RegisterScreen";



const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
            <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false}} />
            <Stack.Screen
                name="Second"
                component={SecondScreen}
                options={{
                      headerShown: false,
                    // headerStyle: { height: 80 }, // Adjust height
                    // headerTitleAlign: 'center', // Center title
                    // headerTitleStyle: { fontSize: 22 },

                }}
            />
            <Stack.Screen name="Third" component={ThirdScreen} />
            <Stack.Screen name="Fourth" component={FourthScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false}} />
            <Stack.Screen name="Fifth" component={FifthScreen} />
            <Stack.Screen name="Sixth" component={SixthScreen} />
            <Stack.Screen name="Seventh" component={SeventhScreen}  />

        </Stack.Navigator>
    );
}
export default RootStack;

