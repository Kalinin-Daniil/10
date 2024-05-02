import fsp from 'fs/promises';

// BEGIN
export async function reverse(fileName) {
    const content = await fsp.readFile(fileName, 'utf-8');
    const lines = content.split('\n');
    const reversedLines = [];
    for (let i = lines.length - 1; i >= 0; i--) {
        reversedLines.push(lines[i]);
    }
    await fsp.writeFile(fileName, reversedLines.join('\n'));
}
// END