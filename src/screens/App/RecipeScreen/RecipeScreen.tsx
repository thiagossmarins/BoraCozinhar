import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import { Recipe, recipeService } from "@domain";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Box, Screen, Text } from "@components";
import { useAppSafeArea } from "@hooks";
import { AppStackParamList } from "@routes";

type RecipeScreenProps = NativeStackScreenProps<AppStackParamList, 'RecipeScreen'>

export function RecipeScreen({ route }: RecipeScreenProps) {
  const { top } = useAppSafeArea();
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    recipeService.getById(recipeId).then(setRecipe);
  }, [recipeId]);

  return (
    <Screen
      canGoback
      canScroll
    >
      <Image
        source={{ uri: recipe?.imageUrl }}
        resizeMode="cover"
        style={[styles.banner, { marginTop: -top }]}
      />
      <Box>
        <Text mt="m" variant="header">{recipe?.title}</Text>
        <Text variant="body">{recipe?.description}</Text>
        <Text mt="s" variant="body">{recipe?.cookTime} minutos • Serve {recipe?.servings} pessoas</Text>
      </Box>
      <Box mt="xl">
        <Text mb="s" variant="subTitle">Ingredientes</Text>
        {recipe?.ingredients.map((ingredients, index) => (
          <Text key={index} variant="body">• {ingredients}</Text>
        ))}
      </Box>
      <Box mt="xl">
        <Text mb="s" variant="subTitle">Como preparar</Text>
        {recipe?.instructions.map((instructions, index) => (
          <Text key={index} variant="body">• {instructions}</Text>
        ))}
      </Box>
    </Screen>
  )
}

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: -24,
    width: Dimensions.get('window').width,
    height: 350,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  }
})