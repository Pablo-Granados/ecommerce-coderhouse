import { Ionicons } from '@expo/vector-icons/';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { COLORS, FONTS } from '../themes';

const BottomTab = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: FONTS.regular,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.dorado,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={30} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Carrito',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={30} color={color} />
          ),
        //   tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.primary,
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: 12,
          },
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Ordenes',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'file-tray' : 'file-tray-outline'} size={30} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default TabsNavigator;