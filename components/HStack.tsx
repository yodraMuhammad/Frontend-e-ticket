import { defaultShortcuts, ShortcutProps } from "@/styles/shortcuts";
import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";
import { Stack, StackProps } from "./Stack";

interface HStackProps extends StackProps {}

export function HStack(props: HStackProps) {
  return (
    <Stack {...props} direction="row" />
  )
}