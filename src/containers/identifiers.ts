const identifiers = {
  components: {
    logger: Symbol.for('components.Logger'),
  },
  services: {
    ride: Symbol.for('services.Ride'),
  },
  controllers: {
    ride: Symbol.for('controllers.Ride'),
  },
};

export default identifiers;
