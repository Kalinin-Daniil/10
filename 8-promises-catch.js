import fsp from 'fs/promises';

// BEGIN

export async function touch(filePath) {
    try {
        await fsp.stat(filePath); // Получаем информацию о файле
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fsp.writeFile(filePath, ''); // Создаем файл, если его нет
        } else {
            throw error; // Пробрасываем другие ошибки
        }
    }
}

// END