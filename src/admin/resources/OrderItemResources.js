const orderItemResources = {
  options: {
    properties: {
      orderId: {
        reference: 'Orders',
        isVisible: { list: true, show: true, edit: true, filter: true },
      },
      productId: {
        reference: 'Products',
        isVisible: { list: true, show: true, edit: true, filter: true },
      },
    },
  },
};

export default orderItemResources;