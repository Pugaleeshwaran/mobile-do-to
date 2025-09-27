import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';

// Import your screens
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState([{ username: "pugal", password: "123" }]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {(props) => <Login {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="Signin">
          {(props) => <Signin {...props} user={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
