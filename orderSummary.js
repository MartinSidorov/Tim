updateOrderSummary: function() {
    var lines = this.get('order').sortProperty('id').map(function(lineItem) {
      return '<li><span class="code">%@</span><span class="desc">%@</span><span class="price">%@</span></li>'.fmt(lineItem.get('id'), lineItem.get('description'), lineItem.get('price'));
    });  
    $('#summary-detail').html(lines.join(''));
  },
  
  orderDidChange: function() {
    this.invokeOnce(this.updateOrderSummary);  
  }.observes('*order.[]', 'subtotal'),
