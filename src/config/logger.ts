import winston, { createLogger, format, transports } from "winston";
import 'winston-daily-rotate-file';

const { combine, timestamp, label, printf } = format;

function InitializeLoggers() {
    var transport = new winston.transports.DailyRotateFile({
        dirname: 'logs/' + getDirName(),
        filename: 'log-%DATE%',
        datePattern: 'YYYY-MM-DD', // rotates every day
    });

    function getDirName() { // returns current YYYY-MM
        var curDate = new Date();
        var curMonth = ("0" + (curDate.getMonth() + 1)).slice(-2);
        var curYYYYMM = curDate.getFullYear() + "-" + curMonth;
        return curYYYYMM;
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