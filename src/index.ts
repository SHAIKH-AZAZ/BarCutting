import fs from "fs";
import path from "path";
import { runBarCuttingAlgorithm } from "./barCutting";
import { rawRows } from "./large_rawRows";

const STANDARD_BAR_LENGTH = 12.0; // meters

const results = runBarCuttingAlgorithm(rawRows, STANDARD_BAR_LENGTH);

// Pretty print to console
console.log("✅ Cutting Optimization Completed.");
console.log("✏️  Writing to result.json...");

// Save to JSON file
const outputPath = path.join("result.json");
fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

console.log(`📄 Results saved to ${outputPath}`);
console.log("✅ Done!");
