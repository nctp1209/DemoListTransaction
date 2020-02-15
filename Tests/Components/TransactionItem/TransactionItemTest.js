import React from "react";
import renderer from "react-test-renderer";

import TransactionItem from '../../../App/Components/TransactionItem';

const demoItem = {
  "id": "5dc77df02320e626185d5021",
  "created": "2019-11-10T03:03:12.383Z",
  "updated": "2019-11-10T03:03:12.383Z",
  "updatedKeys": [

  ],
  "deleted": false,
  "amount": 1360,
  "merchantId": "5ce3c9013163db3f9bd7fa62",
  "autocreditItemId": null,
  "transactionReportId": null,
  "currency": "EUR",
  "provider": "bcmc",
  "state": "CONFIRMED",
  "accountingState": null,
  "qr": {
    "url": "https://s3.eu-west-1.amazonaws.com/pomelopay-qr-codes-lfw9qxg4-production/5ce3c9013163db3f9bd7fa62/transactions/5dc77df02320e626185d5021TQrCode.png"
  },
  "securityWord": "FIERCE LORIS",
  "canRefundIfConfirmed": true,
  "calculateFeeOnImport": false,
  "externalImport": false,
  "externalImportReference": null,
  "merchantDiscountRateCode": "BANCONTACT",
  "externalId": "540351646",
  "localId": null,
  "includeInAutocredit": true,
  "excludeFromRemittance": false,
  "announceToProvider": true,
  "paymentToken": null,
  "history": [
    {
      "state": "INITIATED",
      "updatedDate": "2019-11-10T03:03:12.383Z",
      "trigger": "SYSTEM"
    },
    {
      "state": "QR_CODE_GENERATED",
      "updatedDate": "2019-11-10T03:03:13.970Z",
      "trigger": "SYSTEM"
    },
    {
      "state": "CONFIRMED",
      "updatedDate": "2019-11-10T03:03:33.054Z",
      "trigger": "VENDOR_WEBHOOK"
    }
  ],
  "appVersion": "POMELO_PAY-2.3.2.164",
  "apiVersion": "1.0",
  "deviceId": "53a03d61-7d01-43e2-9e73-2aebee700c30",
  "costStructure": {
    "currency": "EUR",
    "feeRateExact": 0,
    "rateFee": 0,
    "fee": 0,
    "payable": 1360,
    "fixedFee": 0,
    "merchantDiscountRate": {
      "fixedFee": 0,
      "rateFee": 0,
      "code": "BANCONTACT",
      "provider": "bml_epos",
      "resellerMetadata": {
        "reseller": "Pomelo Pay",
        "resellerCode": "BANCONTACT"
      }
    }
  },
  "providerDisplayName": "bcmc",
  "remittanceId": null,
  "orderInfo": null,
  "originatorApp": "53a03d61-7d01-43e2-9e73-2aebee700c30",
  "refundRemittanceId": null,
  "refundId": null,
  "refundReason": null,
  "redirectSecret": "DLi6svxJmOo11hGPefQ39seY0Z1dCQ59",
  "webhooksReceived": [
    "\"txid=540351646&finaltimestamp=2019-11-10T03%3A03%3A24-00%3A00&sha256hash=b26e3de99314a4bb57692648ac7f8e65bdb8b5ce023d317c4f90b1f9582a01f3\""
  ],
  "webhooksSent": [

  ],
  "vendor": "ppro",
  "vendorResponses": [
    "{\"waitStatus\":\"PENDING\",\"sourceId\":\"540351646\",\"redirectSecret\":\"DLi6svxJmOo11hGPefQ39seY0Z1dCQ59\",\"redirect\":{\"url\":\"https://bancontact.girogate.com/bi/t0bc?tx=540351646&rs=o6z040tRauxh57Cq6q2oEhvZBV5wqILW&cs=c740b03575df4587d0f73a7c54815a065dfe1891e5e49a91fbd7ccf6f0e3e28a\"},\"qrCode\":\"BEP://1BC.GIROGATE.DE/T0BC/540351646$X7MR2F5NHZFXACIF4WKR4CSK\"}"
  ],
  "vendorQrCode": "BEP://1BC.GIROGATE.DE/T0BC/540351646$X7MR2F5NHZFXACIF4WKR4CSK",
  "metadata": null,
  "resellerMetadata": {

  },
  "subTotal": null,
  "taxesTotal": null,
  "serviceChargeTotal": null,
  "paymentLinks": [

  ],
  "initiator": "165015cb-882a-403d-9554-481c230cec0f",
  "url": "https://bancontact.girogate.com/bi/t0bc?tx=540351646&rs=o6z040tRauxh57Cq6q2oEhvZBV5wqILW&cs=c740b03575df4587d0f73a7c54815a065dfe1891e5e49a91fbd7ccf6f0e3e28a",
  "mustReview": false,
  "quickCancel": false,
  "isWalletScan": false,
  "initiatorDetails": {
    "id": "165015cb-882a-403d-9554-481c230cec0f",
    "contactEmail": "John.Doe@pomelopay.com",
    "contactName": "John Doe",
    "firstName": "John",
    "lastName": "Doe"
  },
  "expires": "2019-11-11T03:03:12.383Z",
  "customerReference": null,
  "hasError": false,
  "allowRetry": false,
  "threeDSecure": null,
  "paddedCardNumber": null,
  "providerBrandName": null,
  "buyerIdentifier": null,
  "tokenizationMethod": null
}

test("TransactionItem without items", () => {
  const tree = renderer.create(<TransactionItem />).toJSON()
  expect(tree).toMatchSnapshot()
});

test("TransactionItem with items", () => {
  const tree = renderer.create(<TransactionItem transaction={demoItem} />).toJSON()
  expect(tree).toMatchSnapshot()
});
