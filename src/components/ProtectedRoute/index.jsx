import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/Login";

const Stack = createNativeStackNavigator();

export default function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#9450e7"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              textAlign: "center"
            }
          }} />
      </Stack.Navigator>
    );
  }

  return children;
}