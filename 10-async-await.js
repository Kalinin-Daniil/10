import fsp from 'fs/promises';

// BEGIN

export async function exchange(file1, file2) {
    try {
        const content1 = await fsp.readFile(file1, 'utf-8');
        const content2 = await fsp.readFile(file2, 'utf-8');

        await fsp.writeFile(file1, content2);
        await fsp.writeFile(file2, content1);

        console.log('Files exchanged successfully.');
    } catch (error) {
        console.error('Error exchanging files:', error);
    }
}

// END