import React from 'react';
import CustomNavigationContainer from './src/CustomNavigatonContainer';
import { CartProvider } from "./src/Screens/CartContext";
import { Provider } from "react-redux";
import {store} from "./src/Redux/store";
import CartScreen from "./src/Screens/CartScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <CartProvider>
                <CustomNavigationContainer/>
                <Stack.Screen name="CartScreen" component={CartScreen}  />
            </CartProvider>
            </Provider>
    );
}


export default App;
