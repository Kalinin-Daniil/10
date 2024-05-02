import fs from 'fs';

// BEGIN

const write = (filePath, data, callback) => {
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error('Произошла ошибка при записи файла:', err);
        } else {
            callback();
        }
    });
};

export default write;

// END