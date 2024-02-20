import React, { useEffect } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackArrowHeader from "../components/BackArrowHeader";
import AllSportsData from "../components/AllSportsData";
import HorizontalFlatList from "../components/HomeComponent/HorizontalFlatList";
import { AppUtil } from "../Util/AppUtils";

export default function AllSports({route, navigation }) {
  const flag = route.params.flag;
  console.log(flag)

  function backButton() {
    navigation.goBack();
  }

  useEffect(() => {
    // handleBackPress()
  }, [flag])
  

  const handleBackPress = () => {
    if (flag === 1 ) {
      // If flag is 1, navigate to WelcomeScreen
      console.log("WELCOME987");
      navigation.navigate('WelcomeScreen');
      // Return true to prevent the default behavior (e.g., exit the app)
      return true;
    } else {
      // If flag is not 1, go back to the previous screen
      console.log("GO BACK");
      navigation.goBack();
      // Return true to prevent the default behavior (e.g., exit the app)
      return true;
    }
    // If neither condition is met, return false to allow the default behavior
    return false;
  };
  
  useEffect(() => {
    // Add the event listener for the hardware back button
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    // Cleanup the event listener on component unmount
    return () => {
      backHandler.remove();
    };
  }, [flag, navigation]);

  return (
    <View style={styles.rootContainer}>
      <BackArrowHeader title="All Sports" backButton={backButton} />
      <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <AllSportsData navigation={navigation} flag={flag}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop:AppUtil.getHP(4),
    backgroundColor: "#971c47",
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 2,
    marginStart: 5,
  },
  header: {
    flex: 4,
    maxWidth: "80%",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  title2: {
    fontSize: 20,

    fontWeight: "bold",
  },
  title4: {
    fontSize: 20,
    marginHorizontal: 4,
    fontWeight: "bold",
  },
  title3: {
    fontSize: 16,

    color: "#FF1F00",
  },
});
