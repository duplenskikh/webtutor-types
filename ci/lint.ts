/* eslint-disable no-magic-numbers */
import { execSync } from "child_process";

function main() {
  const diffOutput = execSync("git diff origin/main --name-only *.d.ts");
  const files = diffOutput.toString().split("\n").filter(Boolean);

  console.log(`Найдено измененных файлов ${files.length}:\n${files.join("\n")}`);

  for (const file of files) {
    try {
      execSync(`npx eslint ./${file} --rule '{"@typescript-eslint/no-explicit-any": "error"}'`);
    } catch (error) {
      process.stdout.write((error as any).stdout.toString());
    }
  }

  if (process.stdout.bytesWritten > 0) {
    process.exit(1);
  }
}

main();
