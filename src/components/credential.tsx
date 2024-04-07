import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { BadgeStore } from "@/store/badge-store";

import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { MotiView } from "moti";

import { QRCode } from "@/components/qrcode";

const bandImage = require("@/assets/ticket/band.png");
const backgroundImg = require("@/assets/ticket/header.png");

type Props = {
  data: BadgeStore;
  OnChangeAvatar?: () => void;
  onShowQRCode?: () => void;
};

export function Credential({ data, OnChangeAvatar, onShowQRCode }: Props) {
  const { height, width } = useWindowDimensions();
  return (
    <MotiView
      className="w-full self-stretch items-center"
      from={{
        opacity: 0,
        translateY: -height,
        rotateZ: "50deg",
        rotateY: "30deg",
        rotateX: "30deg",
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        rotateZ: "0deg",
        rotateY: "0deg",
        rotateX: "0deg",
      }}
      transition={{
        type: "spring",
        damping: 20,
        rotateZ: {
          damping: 15,
          mass: 3
        }
      }}
    >
      <Image source={bandImage} className="w-24 h-52 z-10" />
      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 -mt-5 rounded-2xl">
        <ImageBackground
          source={backgroundImg}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">
              {data.eventTitle}
            </Text>
            <Text className="text-zinc-50 text-sm font-bold">#{data.id}</Text>
          </View>

          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>

        {data.image ? (
          <TouchableOpacity activeOpacity={0.9} onPress={OnChangeAvatar}>
            <Image
              source={{ uri: data.image }}
              className="w-36 h-36 rounded-full -mt-24"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.9}
            className="w-36 h-36 rounded-full -mt-24 bg-gray-400 items-center justify-center"
            onPress={OnChangeAvatar}
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text className="font-bold text-2xl text-zinc-50 mt-4">
          {data.name}
        </Text>
        <Text className="font-regular text-base text-zinc-300 mb-4">
          {data.email}
        </Text>

        <QRCode value={data.checkInURL} size={120} />

        <TouchableOpacity
          activeOpacity={0.7}
          className="mt-6"
          onPress={onShowQRCode}
        >
          <Text className="font-bold text-orange-500 text-sm">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </MotiView>
  );
}
