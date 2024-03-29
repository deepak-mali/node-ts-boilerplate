import { Application } from 'express';

import { oAuthRouter } from './app/oAuth';

/**
 * @description - API endpoints declarations.
 * @param app - express server.
 */
export const routes = (app: Application): void => {
  // Route for addition functionality.
  app.use('/v1/', oAuthRouter);
};
