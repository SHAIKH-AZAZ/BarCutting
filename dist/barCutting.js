"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBarCuttingAlgorithm = runBarCuttingAlgorithm;
function runBarCuttingAlgorithm(rawRows, standardBarLength) {
    const results = [];
    let currentGroup = "";
    let barIdCounter = 1;
    for (const row of rawRows) {
        if (!row["Cutting Length"] || !row["Total Bars"])
            continue;
        const cuttingLength = row["Cutting Length"];
        const totalBars = row["Total Bars"];
        if (isNaN(cuttingLength) || isNaN(totalBars))
            continue;
        const group = row["Element"] || currentGroup;
        currentGroup = group;
        let remainingBars = totalBars;
        while (remainingBars > 0) {
            const { solution, totalUsedLength } = knapsackSolution(cuttingLength, standardBarLength, remainingBars);
            const used = solution.length;
            const totalLength = totalUsedLength;
            const wastage = +(standardBarLength - totalLength).toFixed(3);
            results.push({
                group,
                cuttingLengths: solution,
                barCount: used,
                totalLength: parseFloat(totalLength.toFixed(3)),
                wastage,
                barId: `B${barIdCounter++}`
            });
            remainingBars -= used;
        }
    }
    return results;
}
function knapsackSolution(length, maxLength, count) {
    const cuts = Array(count).fill(length);
    const result = [];
    let total = 0;
    for (let i = 0; i < cuts.length; i++) {
        if (total + cuts[i] <= maxLength) {
            result.push(cuts[i]);
            total += cuts[i];
        }
    }
    return { solution: result, totalUsedLength: total };
}
