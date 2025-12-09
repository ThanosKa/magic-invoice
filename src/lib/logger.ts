// Simple logger that uses console methods
// Replaced pino to avoid worker thread issues in Next.js

const isDev = process.env.NODE_ENV !== "production";
const logLevel = process.env.LOG_LEVEL || "info";

const levels = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5,
};

const currentLevel = levels[logLevel as keyof typeof levels] ?? levels.info;

function formatMessage(level: string, msg: string, obj?: any) {
  const timestamp = new Date().toISOString();
  const prefix = isDev ? `[${timestamp}] ${level.toUpperCase()}:` : `${level}:`;

  if (obj) {
    return `${prefix} ${msg} ${JSON.stringify(obj)}`;
  }
  return `${prefix} ${msg}`;
}

export const logger = {
  trace: (msg: string | object, obj?: any) => {
    if (currentLevel <= levels.trace) {
      const message = typeof msg === 'object' ? formatMessage('trace', '', msg) : formatMessage('trace', msg, obj);
      console.log(message);
    }
  },
  debug: (msg: string | object, obj?: any) => {
    if (currentLevel <= levels.debug) {
      const message = typeof msg === 'object' ? formatMessage('debug', '', msg) : formatMessage('debug', msg, obj);
      console.log(message);
    }
  },
  info: (msg: string | object, obj?: any) => {
    if (currentLevel <= levels.info) {
      const message = typeof msg === 'object' ? formatMessage('info', '', msg) : formatMessage('info', msg, obj);
      console.log(message);
    }
  },
  warn: (msg: string | object, obj?: any) => {
    if (currentLevel <= levels.warn) {
      const message = typeof msg === 'object' ? formatMessage('warn', '', msg) : formatMessage('warn', msg, obj);
      console.warn(message);
    }
  },
  error: (msg: string | object, obj?: any) => {
    if (currentLevel <= levels.error) {
      const message = typeof msg === 'object' ? formatMessage('error', '', msg) : formatMessage('error', msg, obj);
      console.error(message);
    }
  },
  fatal: (msg: string | object, obj?: any) => {
    const message = typeof msg === 'object' ? formatMessage('fatal', '', msg) : formatMessage('fatal', msg, obj);
    console.error(message);
  },
};
