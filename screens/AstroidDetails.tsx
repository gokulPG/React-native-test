import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { State, Astroid } from "../utils/Types";
import Loader from '../components/Loader'
import { colors } from "../utils/Constants";
import AstroidCard from "../components/AstroidCard";

type Props = {
  astroids: Astroid;
  loading: boolean
};

const AstroidDetails = ({ astroids, loading }: Props) => {
  return (
    <View style={styles.container}>
      <AstroidCard>
        <Text style={styles.header}>ASTROID DETAILS</Text>

        <View style={styles.field}>
          <Text style={styles.fieldName}>Name: </Text>
          <Text style={styles.fieldBody}>{astroids.name}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldName}>Nasa Jpl Url:</Text>
          <Text style={styles.fieldBody}>{astroids.nasa_jpl_url}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldName}>Is a potentially hazardous asteroid:</Text>
          <Text style={styles.fieldBody}>{astroids.is_potentially_hazardous_asteroid ? 'True': 'False'}</Text>
        </View>
      </AstroidCard>
      {loading && <Loader />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    Padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: 'underline',
    paddingVertical: 20
  },
  field: {
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'
  },

  fieldName: {
    color: colors.primary,
    fontSize: 16,
    marginRight: 10
  },

  fieldBody: {
    color: colors.black,
    fontSize: 16
  }

});

const mapStateToProps = (state: { App: State }) => ({
  astroids: state.App.astroids,
  loading: state.App.loading
});

export default connect(mapStateToProps)(AstroidDetails);
