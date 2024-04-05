import { View, Image, StatusBar } from "react-native";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { colors } from "@/styles/colors";

const logoImage = require("@/assets/logo.png");

export default function Register() {
  return (
    <View className="flex-1 justify-center items-center bg-green-500 p-8">
      <StatusBar barStyle={"light-content"} />
      <Image source={logoImage} className="h-16" resizeMode="contain" />
      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6
            name="user-circle"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Nome completo" />
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="E-mail" keyboardType="email-address"/>
        </Input>
        <Button title="Realizar inscrição" />
        <Link
          href="/"
          className="text-gray-100 text-base text-center mt-8"
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  );
}
