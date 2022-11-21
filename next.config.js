module.exports = {
  async rewrites() {
    return [
      {
        source: `/certificados/:id*`,
        destination: '/certificates/:id*',
      },
    ]
  } 
};
