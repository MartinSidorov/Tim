function orderSummary(orderDetails) {
  const summary = `
    Order Summary:
    ---------------------
    Order ID: ${orderDetails.orderId}
    Customer: ${orderDetails.customerName}
    Items:
      ${orderDetails.items.join('\n')}
    Total Amount: $${orderDetails.totalAmount.toFixed(2)}
  `;
  return summary;
}

const orderDetails = {
  orderId: '123456',
  customerName: 'Martin Sidorov',
  items: ['Item 1 - $10.00', 'Item 2 - $15.00'],
  totalAmount: 25.00
};

const summary = orderSummary(orderDetails);
console.log(summary);
