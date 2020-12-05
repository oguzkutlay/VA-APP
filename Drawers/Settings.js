import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const list = [
  {
    title: 'Edit Profile',
    icon: 'edit'
  },
  {
    title: 'Change Password',
    icon: 'key'
  },
  {
    title: 'About Us',
    icon: 'question-circle'
  }
]

function SettingsDrawer() {
  return (
    <View>
      {
        list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} size={20}/>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      }
    </View>
  );
}

export default SettingsDrawer;