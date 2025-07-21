"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const barCutting_1 = require("./barCutting");
const large_rawRows_1 = require("./large_rawRows");
const STANDARD_BAR_LENGTH = 12.0; // meters
const results = (0, barCutting_1.runBarCuttingAlgorithm)(large_rawRows_1.rawRows, STANDARD_BAR_LENGTH);
// Pretty print to console
console.log("✅ Cutting Optimization Completed.");
console.log("✏️  Writing to result.json...");
// Save to JSON file
const outputPath = path_1.default.join("result.json");
fs_1.default.writeFileSync(outputPath, JSON.stringify(results, null, 2));
console.log(`📄 Results saved to ${outputPath}`);
console.log("✅ Done!");
