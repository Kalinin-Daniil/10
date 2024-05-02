import fsp from 'fs/promises';

// BEGIN

export async function getTypes(paths) {
    const types = [];
    for await (const path of paths) {
        try {
            const stats = await fsp.stat(path);
            types.push(stats.isDirectory() ? 'directory' : 'file');
        } catch {
            types.push(null);
        }
    }
    return types;
}

// END