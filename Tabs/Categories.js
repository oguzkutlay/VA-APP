import * as React from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const list = [
  {
    title: 'Technology',
    icon: 'laptop'
  },
  {
    title: 'Fashion',
    icon: 'graduation-cap'
  },
  {
    title: 'Cosmetics',
    icon: 'tint'
  }
]

function CategoriesTab() {
    return (
      <SafeAreaView style={styles.conatiner}>
        <ScrollView style={styles.scrollView}>
          {
          list.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Icon name={item.icon} size={50}/>
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            ))
          }
        </ScrollView>  
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    conatiner: {
      flex: 1
    },
    scrollView: {
      backgroundColor: 'white',
    },
    text: {
      fontSize: 20
    },
    itemStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginVertical: 5,
      flex: 1
      }
  });

  export default CategoriesTab;