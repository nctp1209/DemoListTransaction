import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Formatter } from '../../Helper';
import { commonStyles, colors, fonts } from '../../Themes';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FlatList } from 'react-native-gesture-handler';
import { transactionStateConstant } from '../../Constant';

class TransactionItem extends Component {
  constructor(props) {
    super(props);
  }

  renderTransactionInfo() {
    const { transaction } = this.props
    let transactionState = transactionStateConstant.INITIATED
    if (transaction.state) {
      transactionState = transactionStateConstant[`${transaction.state}`]
    }
    return (
      <View style={styles.transactionInfoContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{Formatter.formatCurrency(transaction.amount, transaction.currency)}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>
            Provider:
              <Text style={styles.infoText}> {transaction.providerDisplayName}</Text>
          </Text>
          <Text style={styles.titleText}>
            State:
              <Text style={[styles.infoText, { color: transactionState.color }]}> {transactionState.label}</Text>
          </Text>
          <Text style={styles.titleText}>
            Created time:
              <Text style={styles.infoText}> {Formatter.formatDateTime(transaction.create)}</Text>
          </Text>
        </View>
      </View>
    )
  }

  renderExtraData() {
    const { transaction } = this.props;
    if (!transaction.qr) return;
    return (
      <View style={styles.extraInfoContainer}>
        <Image source={{ uri: transaction.qr.url }} style={styles.qrCode} />
      </View>
    )
  }

  renderRefundButton() {
    const { onRefundPress, transaction } = this.props;
    if (transaction.state === transactionStateConstant.REFUNDED.value) return null;
    return (
      <TouchableOpacity style={styles.refundButtonContainer} onPress={() => onRefundPress ? onRefundPress(transaction.id) : null}>
        <Text style={styles.refundText}>REFUND</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { transaction } = this.props;
    if (!transaction) return null;
    return (
      <View style={styles.transactionContainer}>
        {this.renderTransactionInfo()}
        {this.renderExtraData()}
        {this.renderRefundButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  transactionContainer: {
    ...commonStyles.border,
    ...commonStyles.shadow,
    borderRadius: 10,
    margin: 10,
    backgroundColor: colors.white,
  },
  priceContainer: { flex: 1, padding: 10, ...commonStyles.centered },
  transactionInfoContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row'
  },
  priceText: {
    letterSpacing: 1,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
    color: colors.darkGreen
  },
  infoContainer: {
    flex: 3,
    padding: 10
  },
  titleText: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15
  },
  infoText: { fontFamily: fonts.primaryBold },
  extraInfoContainer: {
    padding: 10,
    margin: 10,
    ...commonStyles.borderTop,
    ...commonStyles.centered
  },
  qrCode: {
    width: 200, height: 200, resizeMode: 'contain'
  },
  refundButtonContainer: {
    padding: 10,
    ...commonStyles.centered,
    backgroundColor: colors.initiatedColor,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  refundText: {
    fontFamily: fonts.primaryBold,
    fontSize: 17,
    ...commonStyles.borderTop,
    color: colors.white
  }
})

export default TransactionItem
