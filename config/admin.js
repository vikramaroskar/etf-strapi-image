module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7d58bb46b56fd32b190327406ce305dc'),
  },
});
