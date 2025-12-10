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

function formatMessage(level: string, msg: string, obj?: unknown) {
  const timestamp = new Date().toISOString();
  const prefix = isDev ? `[${timestamp}] ${level.toUpperCase()}:` : `${level}:`;

  if (obj !== undefined) {
    return `${prefix} ${msg} ${JSON.stringify(obj)}`;
  }
  return `${prefix} ${msg}`;
}

export const logger = {
  trace: (msg: string | unknown, obj?: unknown) => {
    if (currentLevel <= levels.trace) {
      const message =
        typeof msg === "object" && msg !== null
          ? formatMessage("trace", "", msg)
          : formatMessage("trace", msg as string, obj);
      console.log(message);
    }
  },
  debug: (msg: string | unknown, obj?: unknown) => {
    if (currentLevel <= levels.debug) {
      const message =
        typeof msg === "object" && msg !== null
          ? formatMessage("debug", "", msg)
          : formatMessage("debug", msg as string, obj);
      console.log(message);
    }
  },
  info: (msg: string | unknown, obj?: unknown) => {
    if (currentLevel <= levels.info) {
      const message =
        typeof msg === "object" && msg !== null
          ? formatMessage("info", "", msg)
          : formatMessage("info", msg as string, obj);
      console.log(message);
    }
  },
  warn: (msg: string | unknown, obj?: unknown) => {
    if (currentLevel <= levels.warn) {
      const message =
        typeof msg === "object" && msg !== null
          ? formatMessage("warn", "", msg)
          : formatMessage("warn", msg as string, obj);
      console.warn(message);
    }
  },
  error: (msg: string | unknown, obj?: unknown) => {
    if (currentLevel <= levels.error) {
      const message =
        typeof msg === "object" && msg !== null
          ? formatMessage("error", "", msg)
          : formatMessage("error", msg as string, obj);
      console.error(message);
    }
  },
  fatal: (msg: string | unknown, obj?: unknown) => {
    const message =
      typeof msg === "object" && msg !== null
        ? formatMessage("fatal", "", msg)
        : formatMessage("fatal", msg as string, obj);
    console.error(message);
  },
};
