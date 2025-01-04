import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React from 'react';
import { AuthenticationProvider } from '@/context/AuthContext';

export default function Root() {
  return (
    <>
      <StatusBar style='dark' />
      <AuthenticationProvider>
        <Slot/>
      </AuthenticationProvider>
    </>
  );
}
