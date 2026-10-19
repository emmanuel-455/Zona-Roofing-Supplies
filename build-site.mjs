import { cp, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "dist");
const publicFiles = [
  "index.html",
  "config.js",
  "script.js",
  "styles.css",
  "assets/favicon.svg",
  "assets/zona-roofing-logo.png",
  "assets/longspan-sheets.jpeg",
  "assets/tile-profile-sheets.jpeg",
  "assets/sheet-forming-process.jpeg"
];

const allowedOutput = new Set(publicFiles.map((file) => file.replaceAll("\\", "/")));
async function existingFiles(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true }).catch((error) => {
    if (error.code === "ENOENT") return [];
    throw error;
  });
  const files = [];
  for (const entry of entries) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) files.push(...await existingFiles(path.join(directory, entry.name), relative));
    else files.push(relative.replaceAll("\\", "/"));
  }
  return files;
}

const unexpectedFiles = (await existingFiles(output)).filter((file) => !allowedOutput.has(file));
if (unexpectedFiles.length) {
  throw new Error(`dist/ contains files outside the public allowlist. Move them first to preserve your work: ${unexpectedFiles.join(", ")}`);
}

await mkdir(output, { recursive: true });
for (const file of publicFiles) {
  const destination = path.join(output, file);
  await mkdir(path.dirname(destination), { recursive: true });
  await cp(path.join(root, file), destination);
}
console.log(`Prepared ${publicFiles.length} public files in ${output}`);
