/* eslint-disable no-magic-numbers */
import { execSync } from "child_process";

function main() {
  const diffOutput = execSync("git diff --name-only *.d.ts");
  const files = diffOutput.toString().split("\n").filter(Boolean);

  for (const file of files) {
    try {
      execSync(`npx eslint ./${file} --rule '{"@typescript-eslint/no-explicit-any": "error"}'`);
    } catch (error) {
      process.stdout.write((error as any).stdout.toString());
    }
  }
}

main();
