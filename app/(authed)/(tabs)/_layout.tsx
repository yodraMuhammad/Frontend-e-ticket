import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router"
import { Text } from "react-native";

export default function TabLayout() {
  const tabs = [
    {
      showFor: [],
      name: "(events)",
      displayName: "Events",
      icon: "event",
      options:{
        headerShown: false
      }
    },
    {
      showFor: [],
      name: "(tickets)",
      displayName: "My Tickets",
      icon: "confirmation-num",
      options:{
        headerShown: false
      }
    },
    {
      showFor: [],
      name: "scan-ticket",
      displayName: "Scan Ticket",
      icon: "qr-code-scanner",
      options:{
        headerShown: false
      }
    },
    {
      showFor: [],
      name: "settings",
      displayName: "Settings",
      icon: "settings",
      options:{
        headerShown: false
      }
    },
  ];

  return(
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            ...tab.options,
            headerTitle: tab.displayName,
            // href: tab.showFor.includes()
            tabBarLabel: ({focused}) => (
              <Text style={{ color: focused ? 'black' : 'gray' }}>
                {tab.displayName}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <IconSymbol
                name={tab.icon}
                color={focused ? 'black' : 'gray'}
              />
            )
          }}
        /> 
      ))}
    </Tabs>
  );
}