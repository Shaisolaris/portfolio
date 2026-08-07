// Forces Next.js static export + relative asset base for GitHub Pages.
// Run from a cloned upstream root; best-effort — logs and exits 0 on any shape mismatch.
const fs = require("fs");
const cands = ["next.config.js", "next.config.mjs", "next.config.ts"];
const f = cands.find((c) => fs.existsSync(c));
const slug = process.env.SLUG || "";
const inject = `output: "export", basePath: "${slug ? "/" + slug : ""}", images: { unoptimized: true },`;
try {
  if (!f) {
    fs.writeFileSync("next.config.js", `module.exports = { ${inject} };\n`);
  } else {
    let s = fs.readFileSync(f, "utf8");
    if (!s.includes('output:')) s = s.replace(/(\{)/, `$1 ${inject}`);
    fs.writeFileSync(f, s);
  }
  console.log("next config patched for static export");
} catch (e) {
  console.log("patch skipped:", e.message);
}
