const orderResources = {
  options: {
    properties: {
      userId: { reference: 'Users' },
    },
    actions: {
      list:   { isAccessible: ({ currentAdmin }) => ['admin', 'user'].includes(currentAdmin?.role) },
      show:   { isAccessible: ({ currentAdmin }) => ['admin', 'user'].includes(currentAdmin?.role) },
      new:    { isAccessible: ({ currentAdmin }) => ['admin', 'user'].includes(currentAdmin?.role) },
      edit:   { isAccessible: ({ currentAdmin }) => ['admin', 'user'].includes(currentAdmin?.role) },
      delete: { isAccessible: ({ currentAdmin }) => ['admin', 'user'].includes(currentAdmin?.role) },
    },
    navigation: {
      isVisible: true, // show to all logged-in users
    },
  },
};

export default orderResources;