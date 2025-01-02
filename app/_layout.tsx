import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React from 'react';

export default function Root() {
  return (
    <>
      <StatusBar style='dark' />
      <Slot/>
    </>
  );
}
