import fs from 'fs';

// BEGIN

const print = async (filePath) => {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка при чтении файла:', error);
    }
};

export default print;

// END
