const fileRegex = /\.(xgg)$/
export default function myPlugin() {
  return {
    name: "transform-file",

    transformIndexHtml(html) {
      return html.replace("Hello world!", "Hello Vite!");
    },
    transform(code, id) {
      if(fileRegex.test(id)) {
        return code.replace("a", "console.log");
      }

      if (id.endsWith(".ts")) {
        return code.replace("console.log", "console.error");
      }
    },
  };
}
