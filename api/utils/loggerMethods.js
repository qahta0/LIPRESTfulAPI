const logger = require('../utils/logger');
const ip = require('ip');

const ok = (req) => {
  logger.info(
    `200, OK, ${req.originalUrl}, ${req.method}, ${req.ip}, ${ip.address()}`
  );
};

const created = (req) => {
  logger.info(
    `201, Created, ${req.originalUrl}, ${req.method}, ${
      req.ip
    }, ${ip.address()}`
  );
};

const conflict = (req) => {
  logger.info(
    `409, Conflict, ${req.originalUrl}, ${req.method}, ${
      req.ip
    }, ${ip.address()}`
  );
};

const badRequest = (req) => {
  logger.info(
    `400, Bad request, ${req.originalUrl}, ${req.method}, ${
      req.ip
    }, ${ip.address()}`
  );
};

const internalServerError = (req) => {
  logger.info(
    `500, Created, ${req.originalUrl}, ${req.method}, ${
      req.ip
    }, ${ip.address()}`
  );
};

const forbidden = (req) => {
  logger.info(
    `403, Forbidden, ${req.originalUrl}, ${req.method}, ${
      req.ip
    }, ${ip.address()}`
  );
};
const notFound = (req) => {
  logger.info(
    `404, Not found, ${req.originalUrl}, ${req.method}, ${
      req.ip
    }, ${ip.address()}`
  );
};

module.exports = {
  ok,
  created,
  conflict,
  badRequest,
  internalServerError,
  forbidden,
  notFound,
};
