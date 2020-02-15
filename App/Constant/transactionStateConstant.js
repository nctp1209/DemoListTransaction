import { colors } from "../Themes";

export const transactionStateConstant = {
  INITIATED: {
    value: 'INITIATED',
    label: 'Initiated',
    color: colors.initiatedColor
  },
  QR_CODE_GENERATED: {
    value: 'QR_CODE_GENERATED',
    label: 'QR Code generated',
    color: colors.qrGenerated
  },
  CONFIRMED: {
    value: 'CONFIRMED',
    label: 'Confirmed',
    color: colors.confirmed
  },
  REMITTED: {
    value: 'CONFIRMED',
    label: 'Confirmed',
    color: colors.remitted
  },
  REFUNDED: {
    value: 'REFUNDED',
    label: 'Refunded',
    color: colors.refunded
  },
  CANCELLED: {
    value: 'CANCELLED',
    lavel: 'Cancelled',
    color: colors.cancelled
  }
}