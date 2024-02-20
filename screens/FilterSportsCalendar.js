import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import FilterHeader from "../components/FilterHeader";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";
import { AppUtil } from "../Util/AppUtils";

export default function FilterSportsCalendar({ route, navigation }) {
  const header = route.params.header;
  const [isCheckedFemale, setCheckedFemale] = useState(false);
  const [isCheckedMale, setCheckedMale] = useState(false);
  const [isCheckedDistrict, setCheckedDistrict] = useState(false);
  const [isCheckedState, setCheckedState] = useState(false);
  const [isCheckedNational, setCheckedNational] = useState(false);

  function SportsCalendarHandler() {
    navigation.navigate("SportsCalendar", {
      header: header,
      checkboxData: {
        isCheckedFemale,
        isCheckedMale,
        isCheckedDistrict,
        isCheckedState,
        isCheckedNational,
      },
    });
  }
  return (
    <View style={styles.rootContainer}>
      <FilterHeader title={header} backButton={() => navigation.goBack()} />
      <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <View style={{ margin: 10, flex: 1 }}>
          <Text style={{ color: "grey" }}>Gender</Text>
          <Pressable
            onPress={() => setCheckedFemale(!isCheckedFemale)}
            style={styles.checkboxContainer}
          >
            <Checkbox
              value={isCheckedFemale}
              onValueChange={setCheckedFemale}
              color={isCheckedFemale ? "#FF541F" : "black"}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxText}>Female</Text>
          </Pressable>
          <Pressable
            onPress={() => setCheckedMale(!isCheckedMale)}
            style={styles.checkboxContainer}
          >
            <Checkbox
              value={isCheckedMale}
              onValueChange={setCheckedMale}
              color={isCheckedMale ? "#FF541F" : "black"}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxText}>Male</Text>
          </Pressable>
          <View>
            <Text style={{ color: "grey" }}>Level</Text>
            <Pressable
              onPress={() => setCheckedDistrict(!isCheckedDistrict)} // Corrected onPress
              style={{
                maxWidth: "25%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginVertical: 12,
              }}
            >
              <Checkbox
                value={isCheckedDistrict}
                onValueChange={setCheckedDistrict}
                color={isCheckedDistrict ? "#FF541F" : "black"}
                style={{ marginEnd: 8 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>District</Text>
            </Pressable>
            <Pressable
              onPress={() => setCheckedState(!isCheckedState)} // Corrected onPress
              style={{
                maxWidth: "25%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginVertical: 12,
              }}
            >
              <Checkbox
                value={isCheckedState}
                onValueChange={setCheckedState}
                color={isCheckedState ? "#FF541F" : "black"}
                style={{ marginEnd: 8 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>State</Text>
            </Pressable>
            <Pressable
              onPress={() => setCheckedNational(!isCheckedNational)} // Corrected onPress
              style={{
                maxWidth: "25%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginVertical: 12,
              }}
            >
              <Checkbox
                value={isCheckedNational}
                onValueChange={setCheckedNational}
                color={isCheckedNational ? "#FF541F" : "black"}
                style={{ marginEnd: 8 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>National</Text>
            </Pressable>
          </View>
        </View>

        <View style={{ justifyContent: "flex-end", marginBottom: 20 }}>
          <Button name="Apply Filters" validatonCheck={SportsCalendarHandler} />
        </View>
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
  checkboxContainer: {
    maxWidth: "25%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 12,
  },
  checkbox: {
    marginEnd: 8,
  },
  checkboxText: {
    fontWeight: "bold",
    fontSize: 20,
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
