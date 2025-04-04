export function maxProfit(timeUnits) {
    if (timeUnits < 1 || isNaN(timeUnits)) {
      return { earnings: 0, solutions: [] };
    }
  
    const earnings = { T: 1500, P: 1000, C: 3000 };
    const buildTime = { T: 5, P: 4, C: 10 };
  
    let maxEarnings = 0;
    let bestCombination = [];
  
    for (let t = 0; t <= Math.floor(timeUnits / buildTime.T); t++) {
      for (
        let p = 0;
        p <= Math.floor((timeUnits - t * buildTime.T) / buildTime.P);
        p++
      ) {
        const remaining = timeUnits - (t * buildTime.T + p * buildTime.P);
        const c = Math.floor(remaining / buildTime.C);
        const total = t * earnings.T + p * earnings.P + c * earnings.C;
  
        if (total > maxEarnings) {
          maxEarnings = total;
          bestCombination = [{ T: t, P: p, C: c }];
        } else if (total === maxEarnings) {
          bestCombination.push({ T: t, P: p, C: c });
        }
      }
    }
  
    return { earnings: maxEarnings, solutions: bestCombination };
  }
  