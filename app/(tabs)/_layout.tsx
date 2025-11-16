import 'react-native-reanimated';

import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              <Text
                className={`text-sm font-medium ${
                  focused ? "text-blue-600" : "text-gray-500"
                }`}
              >
                Home
              </Text>
              {focused && <View className="w-8 h-0.5 bg-blue-600 mt-1 rounded-full" />}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              <Text
                className={`text-sm font-medium ${
                  focused ? "text-blue-600" : "text-gray-500"
                }`}
              >
                Explore
              </Text>
              {focused && <View className="w-8 h-0.5 bg-blue-600 mt-1 rounded-full" />}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
