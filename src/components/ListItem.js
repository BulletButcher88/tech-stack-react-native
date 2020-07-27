import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  renderItem() {
    return this.props.expanded ? (
      <Text style={styles.popUpTextStyle}>
        {this.props.library.item.description}
      </Text>
    ) : null;
  }

  render() {
    const { title, id } = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderItem()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 25,
    paddingLeft: 15,
  },
  popUpTextStyle: {
    fontSize: 18,
    padding: 15,
  },
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
