import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { PrimaryButtonStyle } from "./styles";

export const Button = ({
  isLoading = false,
  onPress,
  text,
}: {
  isLoading?: boolean;
  onPress: () => void;
  text: string;
}) => {
  return (
    <>
      <TouchableOpacity style={PrimaryButtonStyle.button} onPress={onPress}>
        {!isLoading && (
          <Text style={PrimaryButtonStyle.buttonTitle}>{text}</Text>
        )}
        {isLoading && <ActivityIndicator animating={isLoading} />}
      </TouchableOpacity>
    </>
  );
};
