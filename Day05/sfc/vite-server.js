const Koa = require('koa')
const app = new Koa()

const fs = require('fs')
const path = require('path')

const { parse } = require('@vue/compiler-sfc')
const { compile } = require('@vue/compiler-dom')

function rewriteImport(content) {
  return content.replace(/from ['"]([^'"]+)['"]/g, function (s0, s1) {
    // s0-完整匹配，s1-分组部分
    console.log(s0, s1);
    // 返回要替换的内容
    // 如果不是以. ../ /开头
    // 就是裸模块导入，替换这些path
    if (!s1.startsWith('.') && !s1.startsWith('/') && !s1.startsWith('../')) {
      return `from '/@modules/${s1}'`
    } else {
      // 相对路径不做处理
      return s0
    }
  })
}

app.use(async (ctx) => {
  // ctx.body = 'kkb vite'
  const url = ctx.request.url
  if (url === '/') {
    ctx.type = 'text/html'
    // ctx.body = fs.readFileSync('./use-in-vite.html', 'utf-8')
    ctx.body = `
      <div id="app"></div>
      <script>
        const process = {
          env: {
            NODE_ENV: 'development'
          }
        }
      </script>
      <script src="./use-in-vite.js" type="module"></script>
    `
  } else if (url.endsWith('.js')) {
    const p = path.resolve(__dirname, url.slice(1))
    ctx.type = 'text/javascript'
    const ret = fs.readFileSync(p, 'utf-8')
    ctx.body = rewriteImport(ret)
  } else if (url.startsWith('/@modules')) {
    const moduleName = url.replace('/@modules/', '')
    const prefix = path.resolve(__dirname, 'node_modules', moduleName)
    const module = require(prefix + '/package.json').module
    const filePath = path.join(prefix, module)
    const ret = fs.readFileSync(filePath, 'utf8')
    ctx.type = 'text/javascript'
    ctx.body = rewriteImport(ret)
  } else if (url.endsWith('.vue')) {
    // 解析单文件组件相当于vue-loader做的事情
    // 转换script部分：将默认导出的组件对象转换为常量
    const p = path.resolve(__dirname, url.slice(1))
    const ret = parse(fs.readFileSync(p, 'utf-8'))
    console.log(ret);
    const scriptContent = ret.descriptor.script.content
    const script = scriptContent.replace('export default ', 'const __script = ')
    
    // 转换template为模板请求
    // 将转换获得的渲染函数设置到__script上
    // 最后重新导出__script
    ctx.type = 'text/javascript'
    ctx.body = `
      ${rewriteImport(script)}
      import { render as __render } from '${url}?type=template'
      __script.render = __render
      export default __script
    `
  } else if (url.endsWith('?type=template')) {
    // 模板编译请求
    const p = path.resolve(__dirname, url.split('?')[0].slice(1))
    const ret = parse(fs.readFileSync(p, 'utf-8'))
    const template = ret.descriptor.template.content
    // 使用编译该模板
    const render = compile(template, {mode: 'module'}).code
    ctx.type = 'text/javascript'
    ctx.body = rewriteImport(render)
  } else if (url.endsWith('.png')) {
    ctx.body = fs.readFileSync('src' + url)
  }
})

app.listen(3000, () => {
  console.log('kvite start');
})