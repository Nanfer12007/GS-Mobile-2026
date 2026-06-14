import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="grid"
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="fazendas"
        options={{
          title: "Fazendas",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="business"
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="plantacoes"
        options={{
          title: "Plantações",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="leaf"
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="satelite"
        options={{
          title: "Satélite",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="planet"
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}