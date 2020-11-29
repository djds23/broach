#!/usr/bin/env node
const { build } = require("estrella")
const pkg = require("./package.json")
build({
  entry: "src/index.ts",
  outfile: pkg.main,
  bundle: true
});
