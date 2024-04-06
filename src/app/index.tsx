import { View, Image, StatusBar, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { colors } from "@/styles/colors";
import { useState } from "react";

const logoImage = require("@/assets/logo.png");

export default function Home() {
  const [code, setCode] = useState("");

  function handleAccessCredential() {
    if (!code.trim()) {
      return Alert.alert("Ingresso", "Informe o código do evento.")
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-green-500 p-8">
      <StatusBar barStyle={"light-content"} />
      <Image source={logoImage} className="h-16" resizeMode="contain" />
      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={setCode}
          />
        </Input>
        <Button title="Acessar credencial" onPress={handleAccessCredential} />
        <Link
          href="/register"
          className="text-gray-100 text-base text-center mt-8"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
