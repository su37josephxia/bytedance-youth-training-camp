const {
  parse,
  compileTemplate,
  compileScript,
  compileStyle,
} = require("@vue/compiler-sfc");
// 解析SFC
const sfc = `
  <template>
    <div>comp</div>
  </template>
  <script>
  export default {
    name: "comp",
  };
  </script>
  <style>
  div {
    color: green;
  }
  </style>
`;
const ast = parse(sfc);
console.log(ast);

// 编译模板
const render = compileTemplate({
  filename: "comp.vue",
  source: ast.descriptor.template.content,
  id: "",
}).code;
console.log(render);

// 编译脚本
const script = compileScript(ast.descriptor, { refTransform: false });
console.log(script);

// 编译样式
const style = compileStyle({
  filename: "comp.vue",
  source: ast.descriptor.styles[0].content,
  id: "",
});
console.log(style);

