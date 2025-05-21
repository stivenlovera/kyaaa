import moment from "moment";
import winston, { createLogger, format, transports } from "winston";
import 'winston-daily-rotate-file';

const { combine, timestamp, label, printf } = format;

function InitializeLoggers() {
    var transport = new winston.transports.DailyRotateFile({
        dirname: 'logs/' + getDirName(),
        filename: '%DATE%.log',
        datePattern: 'DD', // rotates every day
    });

    function getDirName() { // returns current YYYY-MM
           var currentTime = `${moment().format('YYYY')}/${moment().format('MMMM')}`;
        return currentTime;
    }

    const myFormat = printf(({ level, message, label, timestamp }) => {
        return `${timestamp} [${level}]: ${message}`;
    });

    var logger = winston.createLogger({
        format: combine(
            label({ label: 'right meow!' }),
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            myFormat,
        ),
        transports: [
            transport,
            new (winston.transports.Console)({ level: 'info' }),
        ]
    });
    return logger;
}

export const logger = InitializeLoggers();