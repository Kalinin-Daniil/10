import fs from 'fs';

// BEGIN

const watch = (filePath, interval, callback) => {
    let lastModifiedTime = null;

    const checkFile = () => {
        fs.stat(filePath, (err, stats) => {
            if (err) {
                clearInterval(timer);
                return callback(err);
            }

            if (lastModifiedTime && stats.mtimeMs !== lastModifiedTime) {
                callback(null);
            }

            lastModifiedTime = stats.mtimeMs;
        });
    };

    const timer = setInterval(checkFile, interval);

    return timer;
};

export default watch;

// END
