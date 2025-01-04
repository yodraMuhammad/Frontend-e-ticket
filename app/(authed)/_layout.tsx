import { useAuth } from "@/context/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function Layout() {
  const { isLoggedIn } = useAuth();

  if(!isLoggedIn) {
    return <Redirect href="/login"/>;
  }

  return <Stack screenOptions={{ headerShown: false}} />
}