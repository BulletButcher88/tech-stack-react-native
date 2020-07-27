import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  UNSAFE_componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderItem() {
    return this.props.expanded ? (
      <CardSection>
        <Text style={styles.popUpTextStyle}>
          {this.props.library.item.description}
        </Text>
      </CardSection>
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
    flex: 1,
  },
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
