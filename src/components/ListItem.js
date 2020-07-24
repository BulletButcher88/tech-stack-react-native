import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import CardSection from './common/CardSection';

class ListItem extends Component {
  render() {


    return (
      <CardSection>
        <Text style={styles.titleStyle}>{this.props.library.item.title}</Text>
      </CardSection>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 15,
    paddingLeft: 15,
  },
});

export default ListItem;
