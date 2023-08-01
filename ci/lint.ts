/* eslint-disable no-magic-numbers */
import { execSync } from "child_process";

function main() {
  const diffOutput = execSync("git diff origin/main --name-only *.d.ts");
  const files = diffOutput.toString().split("\n").filter(Boolean);

  console.log(`Найдено измененных файлов ${files.length}`);

  if (files.length > 10) {
    try {
      execSync("npx eslint *.d.ts", {
        stdio: ["ignore", process.stdout, process.stderr]
      });
    } catch {
      setTimeout(() => process.exit(1));
    }
  } else {
    console.log(`Измененные файлы:\n${files.join("\n")}`);

    let i = 0;

    for (const file of files) {
      console.log(`Обрабатывается файл ${i}`);
      i++;

      try {
        execSync(`npx eslint ./${file} --rule '{"@typescript-eslint/no-explicit-any": "error"}'`, {
          stdio: ["ignore", process.stdout, process.stderr]
        });
      } catch {
        setTimeout(() => process.exit(1));
      }
    }
  }
}

main();
