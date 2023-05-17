import { Text, View } from "react-native";
import { User } from "../gql/generated/schema";

type UserProps = {
  user: Pick<User, 'email' | 'firstname' | 'lastname'>
}

export function UserListItem({user}: UserProps) {
  return (
    <View>
      <Text>{user.email}</Text>
      <Text>{user.firstname}</Text>
      <Text>{user.lastname}</Text>
    </View>
  )
}