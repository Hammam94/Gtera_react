const guards = {
  productRoutes: {
    super_admin: ['all'],
    admin: ['new', 'showApprovedProducts', 'showPendingProducts'],
    normal: ['new', 'showApprovedProducts']
  },
  
  userRoutes: {
    super_admin: ['all'],
    admin: ['index'],
    normal: []
  }
};

export default Object.freeze(guards);
