const productResources = {
  options: {
    properties: {                   // ← only properties here
      categoryId: {
        reference: 'Categories',
        isVisible: { list: true, show: true, edit: true, filter: true },
      },
    },
    actions: {                      // ← actions outside properties
      list:   { isAccessible: ({ currentAdmin }) => ['admin', 'user'].includes(currentAdmin?.role) },
      show:   { isAccessible: ({ currentAdmin }) => ['admin', 'user'].includes(currentAdmin?.role) },
      new:    { isAccessible: ({ currentAdmin }) => currentAdmin?.role === 'admin' },
      edit:   { isAccessible: ({ currentAdmin }) => currentAdmin?.role === 'admin' },
      delete: { isAccessible: ({ currentAdmin }) => currentAdmin?.role === 'admin' },
    },
    navigation: {                   // ← navigation outside properties
      isVisible: true,
    },
  },
};

export default productResources;