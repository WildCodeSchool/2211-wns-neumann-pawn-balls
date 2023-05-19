
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useGetUsersQuery } from "../gql/generated/schema";
import { UserListItem } from "./user";

export function UserList() {

  const { loading, data } = useGetUsersQuery();
  const users = data?.getUsers;

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        refreshing={loading}
        renderItem={
          ({item}) =>
            <UserListItem user={item}></UserListItem>
        }
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>no user</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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