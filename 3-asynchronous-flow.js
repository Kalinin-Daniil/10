import fs from 'fs';

// BEGIN

export function compareFileSizes(filePath1, filePath2, cb) {
    fs.stat(filePath1, (err1, stats1) => {
        if (err1) {
            cb(err1);
            return;
        }

        fs.stat(filePath2, (err2, stats2) => {
            if (err2) {
                cb(err2);
                return;
            }

            const result = Math.sign(stats1.size - stats2.size);
            cb(null, result);
        });
    });
}

// END