import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust if your assets path differs
const folderPath = path.resolve(__dirname, "../src/assets/originals");

// CLI flags
const args = new Set(process.argv.slice(2));
const isDryRun = args.has("--dry-run") || args.has("-n");

// Config
const baseName = "petImage_";
// Accept files regardless of extension (we'll skip dotfiles like .DS_Store)
const skipDotfile = /^\./;
// Match petImage_## WITH an extension
const petPatternWithExt = /^petImage_(\d+)\.[^.]+$/i;
// Match petImage_## with NO extension
const petPatternBare = /^petImage_(\d+)$/i;
const skipPrefix = /^logo_sugarloaf/i;

function uniqueJpgTarget(baseName: string, existing: Set<string>) {
  let candidate = `${baseName}.jpg`;
  if (!existing.has(candidate)) return candidate;
  let i = 1;
  while (existing.has(`${baseName}_${i}.jpg`)) i++;
  return `${baseName}_${i}.jpg`;
}

function pad(num: number, width: number) {
  const s = String(num);
  return s.length >= width ? s : "0".repeat(width - s.length) + s;
}

function renameImages() {
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
    console.error(`Folder does not exist or is not a directory: ${folderPath}`);
    process.exit(1);
  }

  const files = fs.readdirSync(folderPath);

  // Consider only regular files (not directories) and skip dotfiles like .DS_Store
  const imageFiles = files.filter((f) => {
    if (skipDotfile.test(f)) return false;
    const full = path.join(folderPath, f);
    try {
      return fs.statSync(full).isFile();
    } catch {
      return false;
    }
  });

  // Split into existing petImage files (keep) and others (rename),
  // while skipping any logo_sugarloaf* files from renaming.
  const keepSet = new Set<string>();
  let maxIndex = 0;

  for (const f of imageFiles) {
    let m: RegExpMatchArray | null = null;
    if (petPatternBare.test(f)) {
      keepSet.add(f);
      m = f.match(petPatternBare);
    } else if (petPatternWithExt.test(f)) {
      keepSet.add(f);
      m = f.match(petPatternWithExt);
    }
    if (m && m[1]) {
      const idx = Number(m[1]);
      if (Number.isFinite(idx)) maxIndex = Math.max(maxIndex, idx);
    }
  }

  const candidatesToRename = imageFiles
    // Only rename files that match "petImage_###" with NO extension
    .filter((f) => petPatternBare.test(f))
    // Still skip logo_sugarloaf*
    .filter((f) => !skipPrefix.test(path.parse(f).name));

  // Build a set of existing filenames to guard against collisions
  const existingNames = new Set<string>(files);

  // Plan: for each bare petImage_###, append ".jpg" (avoid collisions)
  const plan: Array<{ from: string; to: string }> = [];

  // Stable order
  candidatesToRename.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  for (const f of candidatesToRename) {
    const base = path.parse(f).name; // e.g., "petImage_012"
    const target = uniqueJpgTarget(base, existingNames); // e.g., "petImage_012.jpg"
    plan.push({ from: f, to: target });
    existingNames.add(target);
  }

  if (plan.length === 0) {
    console.log("Nothing to do. Either everything is already petImage_## with extensions or only skipped files were found.");
    return;
  }

  console.log(`${isDryRun ? "[DRY RUN] " : ""}Renaming plan:`);
  for (const { from, to } of plan) {
    console.log(`  ${from} -> ${to}`);
  }

  if (isDryRun) {
    console.log("Dry run complete. No files were changed.");
    return;
  }

  // Two-phase rename to avoid in-place collisions
  const tempSuffix = `.__renametmp__${Date.now()}`;

  const temps: Array<{ tmp: string; final: string }> = [];
  for (const { from } of plan) {
    const oldPath = path.join(folderPath, from);
    const tmpPath = path.join(folderPath, from + tempSuffix);
    fs.renameSync(oldPath, tmpPath);
    temps.push({ tmp: tmpPath, final: "" }); // final filled in below
  }

  // Apply finals in same order as plan
  for (let i = 0; i < plan.length; i++) {
    const { to } = plan[i];
    const finalPath = path.join(folderPath, to);
    temps[i].final = finalPath;
  }

  for (const { tmp, final } of temps) {
    fs.renameSync(tmp, final);
  }

  console.log("All bare petImage_## files were updated to have .jpg extensions. Existing files with extensions and logo_sugarloaf* were left untouched.");
}

renameImages();
