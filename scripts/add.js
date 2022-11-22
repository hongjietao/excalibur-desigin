const path = require("path");
const fs = require("fs");
const glob = require("glob");
const chalk = require("chalk");
const { spawn } = require("child_process");
const handlebars = require("handlebars");

/**
 * abc-xyz => AbcXyz
 * @param {*} str
 */
const varCase = (str) =>
  str
    .replace(/-[a-z]/g, (m) => m[1].toUpperCase())
    .replace(/^.{1}/, (m) => m.toUpperCase());

/**
 * Ab-cXyz => abcxyz
 * @param {*} str
 */
const lowCase = (str) =>
  str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^-/, "");

/**
 * 闭包
 */
(() => {
  // 变量名称
  const component = process.argv[2];
  // 目录名称
  const dirName = lowCase(component);
  // 组件名称
  const componentName = varCase(component);
  // 组件路径
  const componentPath = path.join(process.cwd(), `src/${dirName}`);
  // 新建目录
  spawn("mkdir", ["-p", componentPath]);
  // 读模板目录
  const tplFiles = glob.sync(path.join(__dirname, `template/*.hbs`));

  tplFiles.forEach(async (filePath) => {
    // 读文件
    fs.readFile(filePath, "utf8", async (err, data) => {
      if (err) {
        throw err;
      }

      // 解析模板文件
      const template = await handlebars.compile(data);
      const result = template({
        dirName,
        componentName,
      });

      // 新路径
      const newPath = filePath
        .replace(`scripts/template`, `src/${dirName}`)
        .replace("component", dirName)
        .replace("Component", componentName)
        .replace(".hbs", "");

      // 写文件
      await fs.writeFile(newPath, result, (err) => {
        if (err) throw err;
        console.log(chalk.green(`write ${newPath} success!`));
      });
    });
  });
})();
