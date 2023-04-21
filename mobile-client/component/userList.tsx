
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useGetUsersQuery } from "../gql/generated/schema";

export function UserList() {

  const [users, setUsers] = useState([]);
  const {data} = useGetUsersQuery();
  console.log(data);
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
  },
});