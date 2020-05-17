import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../utils/Constants";
import Astroid from "../screens/Astroid";
import AstroidDetails from "../screens/AstroidDetails";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
          headerTintColor: colors.white,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Astroid"
          component={Astroid}
          options={{ title: "Astroid" }}
        />
        <Stack.Screen
          name="AstroidDetails"
          component={AstroidDetails}
          options={{ title: "Astroid Detial" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
