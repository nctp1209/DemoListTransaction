import Moment from 'moment'
import _ from 'lodash';

import { currencyConstant } from '../Constant';

export const Formatter = {
  formatCurrency,
  formatDateTime
}

function formatCurrency(number, currency = currencyConstant.EUR.label, decimalNumber = 0, separate = ',') {
  if (typeof number === 'undefined') {
    number = 0
  }

  let result = number.toFixed(decimalNumber);
  result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separate)
  const currencyFormat = currencyConstant[`${currency}`]
  result = currencyFormat.format.replace(':{amount}', result)

  return result;
}

function formatDateTime(timeStamp, format = 'H[h]mm, DD.MM.YYYY') {
  if (timeStamp === -1) {
    return 'N/A'
  } else {
    let dateTime = Moment(timeStamp)
    return dateTime.format(format)
  }
}