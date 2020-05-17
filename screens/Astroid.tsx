import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import AstroidCard from "../components/AstroidCard";
import { colors } from "../utils/Constants";
import { connect } from "react-redux";
import { getAstroid, getRandomAstroid } from "../store/actions/AppAction";

type Props = {
  navigation: {
    navigate: Function;
  };
  getAstroid: Function;
  getRandomAstroid: Function;
};

const Astroid = ({ navigation, getAstroid, getRandomAstroid }: Props) => {
  const [astroid, setAstroid] = useState("");

  return (
    <View style={styles.container}>
      <AstroidCard>
        <TextInput
          placeholder="Enter Asteroid ID"
          value={astroid}
          onChangeText={(value) => setAstroid(value)}
          style={styles.input}
        />

        <View style={styles.spacing}>
          <Button
            disabled={!astroid}
            title="Submit"
            onPress={() => getAstroid(astroid, navigation.navigate)}
          />
        </View>
        <View style={styles.spacing}>
          <Button
            title="Random Asteroid"
            onPress={() => getRandomAstroid(navigation.navigate)}
          />
        </View>
      </AstroidCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    Padding: 20,
  },

  input: {
    paddingHorizontal: 3,
    paddingVertical: 6,
    marginVertical: 30,
    borderWidth: 1
  },

  spacing: {
    marginTop: 10,
  },
});

export default connect(null, { getAstroid, getRandomAstroid })(Astroid);
