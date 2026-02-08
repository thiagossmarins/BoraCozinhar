import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { ArrowBackIcon } from "@assets";
import { useNavigation } from "@react-navigation/native";

import { Box } from "@components";
import { useAppSafeArea } from "@hooks";


interface ScreenProps {
  children: React.ReactNode
  canGoback?: boolean
  canScroll?: boolean
}

export function Screen({ canGoback, canScroll, children }: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const navigation = useNavigation();
  const Container = canScroll ? ScrollView : Box;

  return (
    <Container
      flex={1}
      backgroundColor="mainBackground"
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: top, paddingBottom: bottom, paddingHorizontal: 24 }}
    >
      {canGoback && (
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.goBack()}
        >
          <ArrowBackIcon />
        </TouchableOpacity>
      )}
      {children}
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10
  }
})