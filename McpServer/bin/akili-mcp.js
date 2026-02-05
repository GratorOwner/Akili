#!/usr/bin/env node
import { runServer } from "../src/server.js";

const args = process.argv.slice(2);

if (args[0] === "serve") {
  runServer();
} else {
  console.log("Usage: akili-mcp serve");
}

