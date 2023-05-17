import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useGetProfileQuery, useLoginMutation, useLogoutMutation } from "../gql/generated/schema";

export default function LoginScreen() {
  const [credentials, setCredentials] = useState({
    email: 'admin@gmail.com',
    password: 'SupraMegaGigaSecretPassword',
  });

  const [error, setError] = useState("");

  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();
  const { data: currentUser, client } = useGetProfileQuery({
    errorPolicy: "ignore",
  });

  return (
    <View style={styles.container}>
      {currentUser?.profile ? (
        <View>
          <Text>connected as {currentUser.profile.email}</Text>
          <Button
            onPress={async () => {
              try {
                await logout();
                SecureStore.deleteItemAsync("token");
              } catch (err) {
                setError("invalid credentials");
              } finally {
                client.resetStore();
              }
            }}
            title="Log out"
          />
        </View>
      ) : (
        <View>
          <Text>Se connecter</Text>

          <TextInput
            style={styles.credentialFields}
            value={credentials.email}
            onChangeText={(newValue) =>
              setCredentials({ ...credentials, email: newValue })
            }
          />
          <TextInput
            style={styles.credentialFields}
            value={credentials.password}
            onChangeText={(newValue) =>
              setCredentials({ ...credentials, password: newValue })
            }
          />

          <Button
            onPress={async () => {
              try {
                setError("");
                const res = await login({ variables: { data: credentials } });
                SecureStore.setItemAsync("token", res.data?.login as string);
              } catch (err) {
                setError("invalid credentials");
              } finally {
                client.resetStore();
              }
            }}
            title="Log in"
          />
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "red",
  },

  credentialFields: {
    backgroundColor: 'lime',
    
  }
});