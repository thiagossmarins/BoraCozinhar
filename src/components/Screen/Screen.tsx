import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import { Box } from "../Box/Box";


interface ScreenProps {
  children: React.ReactNode
  canGoback?: boolean
}

export function Screen({ canGoback, children }: ScreenProps) {
  const { top, bottom } = useAppSafeArea();

  return (
    <Box
      flex={1}
      paddingHorizontal="l"
      backgroundColor="mainBackground"
      style={{ paddingTop: top, paddingBottom: bottom }}
    >
      {children}
    </Box>
  )
}