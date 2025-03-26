import React from 'react';
import CustomNavigationContainer from './src/CustomNavigatonContainer';
import { CartProvider } from "./src/Screens/CartContext";


function App(): React.JSX.Element {
    return (
            <CartProvider>
                <CustomNavigationContainer/>
            </CartProvider>
    );
}


export default App;
