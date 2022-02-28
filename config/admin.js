module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3687f319026b494cf7570fc6a3f1eda6'),
  },
});
