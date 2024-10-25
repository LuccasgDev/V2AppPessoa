// src/routes/Routes.tsx
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from './stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
