import React from "react";
import { Text, View } from "react-native";
import { firebase } from "../../firebase/config";
import { Button } from "../common/Button/Button";

export default function HomeScreen({ navigation }: any) {
  const [isLoading, setIsLoading] = React.useState(false);

  const signOutUser = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signOut();
      navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View>
      <Button onPress={signOutUser} isLoading={isLoading} text="Sign out" />
      <Text>Home Screen</Text>
    </View>
  );
}
