import fs from "fs";
import path from "path";

const deleteResourceForks = (dir: string) => {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    if (file.startsWith("._")) {
      fs.rmSync(path.join(dir, file), { force: true });
    }
  }
};

const onPreBootstrap = () => {
  deleteResourceForks(path.resolve("static"));
  deleteResourceForks(path.resolve("public"));
};

export { onPreBootstrap };
