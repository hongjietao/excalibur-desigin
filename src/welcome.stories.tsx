import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <div
        style={{
          lineHeight: "28px",
        }}
      >
        <strong>学习搭建组件库，制作一个简易版的 antd</strong>
        <div>
          项目地址：
          <a href="https://github.com/hongjietao/excalibur-design">
            https://github.com/hongjietao/excalibur-design
          </a>
        </div>
        <div>React + TypeScript + Storybook + 单元测试</div>
        <br />
        <strong>项目使用:</strong>
        <div>
          <code>
            创建项目: yarn create react-app my-app template --typescript <br />
            安装依赖： `yarn` <br />
            启动项目：`yarn sb` <br />
            创建新组件： 'yarn new your-component-name'
            <br />
            单元测试：`yarn jest`
          </code>
        </div>
        <br />
        <strong>单元测试相关文档</strong>
        <div>https://testing-library.com/docs/react-testing-library/intro</div>
        <div> https://www.robinwieruch.de/react-testing-library/</div>
        <div> https://www.jianshu.com/p/0104595b0123/</div>
        <br />
        <strong>模板文件介绍</strong>
        <div>
          https://handlebarsjs.com/zh/guide/#%E4%BB%80%E4%B9%88%E6%98%AF-handlebars
        </div>
      </div>
    );
  },
  { info: { disable: true } }
);
