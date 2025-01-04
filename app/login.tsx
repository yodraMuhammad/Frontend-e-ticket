import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { HStack } from "@/components/HStack";
import { Input } from "@/components/Input";
import { TabBarIcon } from "@/components/TabBarIcon";
import { Text } from "@/components/Text";
import { VStack } from "@/components/VStack";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

export default function Login() {
  const { authenticate, isLoadingAuth } = useAuth();

  const [authMode, setAuthMode] = useState<"login" | "register">("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onAuthentication = async() => {
    await authenticate(authMode, email, password);
  }

  const onToggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex:1}}>
        <VStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          p={40}
          gap={40}
        >
          <HStack gap={10}>
            <TabBarIcon name="ticket" size={40} color="gold"/>
            <Text fontSize={30} bold mb={20} >E-Ticket</Text>
          </HStack>
          <VStack w={"100%"} gap={30}>
            <VStack gap={30}>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="darkgray"
                autoCapitalize="none"
                autoCorrect={false}
                h={48}
                p={14}
              />
            </VStack>
          <VStack w={"100%"} gap={30}>
            <Input
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="darkgray"
              autoCapitalize="none"
              autoCorrect={false}
              h={48}
              p={14}
            />
          </VStack>
          <Button
            isLoading={isLoadingAuth}
            onPress={onAuthentication}
          >
            {authMode === "login" ? "Login" : "Register"}
          </Button>
          </VStack>

          <Divider w={ "90%" } />

          <Text onPress={ onToggleAuthMode } fontSize={ 16 } underline>
            { authMode === 'login' ? 'Register new account' : 'Login to account' }
          </Text>

        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}