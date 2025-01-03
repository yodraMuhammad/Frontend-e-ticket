import { defaultShortcuts, ShortcutProps } from "@/styles/shortcuts";
import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";
import { Stack, StackProps } from "./Stack";

interface VStackProps extends StackProps {}

export function VStack(props: VStackProps) {
  return (
    <Stack {...props} direction="column" />
  )
}