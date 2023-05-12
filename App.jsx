import { CardStyleInterpolators } from "@react-navigation/stack";
import React from "react";
import { Router } from "./src/Screens/routes";


const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Routes" component={Routes} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Logoff" component={Logoff} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
        <RootStack/>
    </NavigationContainer>
  );
}
