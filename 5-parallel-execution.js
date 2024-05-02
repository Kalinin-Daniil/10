import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN

const getDirectorySize = (dirPath, callback) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return callback(err);
        }

        async.map(
            files,
            (file, mapCallback) => {
                const filePath = path.join(dirPath, file);
                fs.stat(filePath, (statErr, stats) => {
                    if (statErr) {
                        return mapCallback(statErr);
                    }
                    if (stats.isFile()) {
                        mapCallback(null, stats.size);
                    } else {
                        mapCallback(null, 0);
                    }
                });
            },
            (mapErr, sizes) => {
                if (mapErr) {
                    return callback(mapErr);
                }

                const totalSize = sizes.reduce((acc, size) => acc + size, 0);
                callback(null, totalSize);
            }
        );
    });
};

export { getDirectorySize };

// END
