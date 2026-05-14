const settingResources = {
  options: {
    actions: {
      list:   { isAccessible: (context = {}) => context.currentAdmin?.role === 'admin' },
      show:   { isAccessible: (context = {}) => context.currentAdmin?.role === 'admin' },
      new:    { isAccessible: (context = {}) => context.currentAdmin?.role === 'admin' },
      edit:   { isAccessible: (context = {}) => context.currentAdmin?.role === 'admin' },
      delete: { isAccessible: (context = {}) => context.currentAdmin?.role === 'admin' },
    },
    navigation: {
      isVisible: (context = {}) => context.currentAdmin?.role === 'admin',
    },
  },
};

export default settingResources;