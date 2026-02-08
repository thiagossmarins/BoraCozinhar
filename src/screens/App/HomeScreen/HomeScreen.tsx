

import { useEffect, useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";

import { Recipe, recipeService } from "@domain"
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Screen, Text, Box, TouchableOpacityBox } from "@components";
import { AppStackParamList } from "@routes";

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [recipe, setRecipe] = useState<Recipe[]>([]);

  useEffect(() => {
    async function loadListRecipe() {
      const response = await recipeService.getList();
      setRecipe(response);
    }

    loadListRecipe();
  })

  return (
    <Screen>
      <Box mb="xl">
        <Text variant="header">Bem-vindo 👋</Text>
      </Box>
      <Box>

        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
          <Text variant='subTitle' mb="m">Receitas populares</Text>
          <TouchableOpacity>
            <Text variant="body" color="textSecondary" textDecorationLine="underline" mb="s">Ver todas</Text>
          </TouchableOpacity>
        </Box>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {recipe.map(item => (
            <TouchableOpacityBox key={item.id}
              width={200}
              borderRadius="m"
              overflow="hidden"
              padding="m"
              alignItems="center"
              justifyContent="flex-start"
              backgroundColor="cardSecondaryBackground"
              marginRight="m"
              onPress={() => navigation.navigate('RecipeScreen', {
                recipeId: item.id
              })}
            >
              <Image
                style={{ width: 175, height: 175, borderRadius: 8, }}
                source={{ uri: item.imageUrl }}
              />
              <Box>
                <Text mt="s" fontWeight={600}>{item.title}</Text>
                <Box bottom={0} width="100%" flexDirection="row" justifyContent="space-between" mt="s">
                  <Text color="textSecondary">{item.difficulty}</Text>
                  <Text color="textSecondary">{item.prepTime}</Text>
                </Box>
              </Box>
            </TouchableOpacityBox>
          ))}
        </ScrollView>

      </Box>
    </Screen>
  )
}