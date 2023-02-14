import path from "path";
import fsPromise from "fs/promises";

export async function getAboutPageMarkdown(filePath: string[]): Promise<{ error: any } | { content: string }> {
    try {
        const targetPath = path.join(process.cwd(), ...filePath);
        console.log(targetPath);
        const data = await fsPromise.readFile(targetPath, "utf-8");
        return { content: data };
    } catch (error) {
        console.error(error);
        return { error: error };
    }
}