import * as React from 'react';
import { Button, Text, View } from 'react-native';

function AccountDrawer({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Login" onPress={() => navigation.navigate('Login')}/>
      </View>
    );
  }

  export default AccountDrawer;