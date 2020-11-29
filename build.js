#!/usr/bin/env node
const { build, cliopts } = require("estrella")
const pkg = require("./package.json")
build({
  entry: "src/index.ts",
  outfile: pkg.main,
  bundle: true
});

// Run a local web server with livereload when -watch is set
cliopts.watch && require("serve-http").createServer({
  port: 8181,
  pubdir: require("path").join(__dirname, ""),
})