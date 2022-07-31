export enum Environment {
  DEVELOPMENT = 'development',
  TEST = 'test',
  QA = 'qa',
  ALPHA = 'alpha',
  BETA = 'beta',
  UAT = 'uat',
  STAGE = 'stage',
  PRODUCTION = 'production',
  DEMO = 'demo',
}

export enum Path {
  INDEX = '/',
  AUTH = '/auth',
}

export default {
  Environment,
  Path,
}
