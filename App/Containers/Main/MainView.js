import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';

import Header from '../../Components/Header/Header';
import TransactionItem from '../../Components/TransactionItem';
import ListEmpty from '../../Components/ListEmpty/ListEmpty';

import { colors, commonStyles } from '../../Themes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getListTransaction } = this.props
    if (getListTransaction) getListTransaction()
  }

  onRefundPress(tranId) {
    const { refundTransactionRequest } = this.props;
    if (tranId) {
      Alert.alert(
        'Refune transaction',
        'Are you sure to refund this transaction?',
        [
          {
            text: 'Yes', onPress: () => refundTransactionRequest(tranId)
          },
          {
            text: 'Cancel'
          }
        ]
      )
    }
  }

  renderListTransaction() {
    const { listTransaction } = this.props;

    if (listTransaction.processing) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.primary} />
        </View>
      )
    }

    let items = [];
    if (listTransaction && listTransaction.listTransaction) {
      items = listTransaction.listTransaction.items;
    }

    return (
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${index}`}
        ListEmptyComponent={() => <ListEmpty title='There is no transaction in your list' />}
        renderItem={({ item }) =>
          <TransactionItem
            transaction={item}
            onRefundPress={(tranId) => this.onRefundPress(tranId)}
          />
        }
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title='List transactions' />
        {this.renderListTransaction()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.backgroundColor },
  loadingContainer: { padding: 20, ...commonStyles.centered }
})

export default Main;
