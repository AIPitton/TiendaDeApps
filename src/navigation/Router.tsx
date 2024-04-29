import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FlagScreen from '../screens/FlagScreen'
const Tab = createMaterialTopTabNavigator()
function Router() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Flags" component={FlagScreen} />
      <Tab.Screen name="Search" component={FlagScreen} />
      <Tab.Screen name="Language" component={FlagScreen} />
    </Tab.Navigator>
  )
}

export default Router
