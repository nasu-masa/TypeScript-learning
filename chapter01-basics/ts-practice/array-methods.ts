interface Statistics {
  sum: number;
  average: number;
  max: number;
  min: number;
}

function calculateStats(numbers: number[]): Statistics {
  let sum = 0;
  let max = numbers[0];
  let min = numbers[0];
  let average = 0;

  for (const num of numbers) {
    sum += num;

    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }

  average = sum / numbers.length;

  return { sum: sum, average: average, max: max, min: min };
  // return { sum, average, max, min };
}

const scores = [22, 33, 44, 55, 66, 77, 88];

const result = calculateStats(scores);

console.log(`合計: ${result.sum}`);
console.log(`平均: ${result.average}`);
console.log(`最大: ${result.max}`);
console.log(`最小: ${result.min}`);
console.log("--------- 解答例 ---------");

//解答例
{
  // 統計情報の型定義
  interface Stats {
    sum: number;
    average: number;
    max: number;
    min: number;
  }

  // 統計情報を計算する関数
  function calculateStats(numbers: number[]): Stats {
    if (numbers.length === 0) {
      return { sum: 0, average: 0, max: 0, min: 0 };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return { sum, average, max, min };
  }

  // テスト
  const scores: number[] = [85, 90, 78, 92, 88];
  const result = calculateStats(scores);

  console.log(`合計: ${result.sum}`); // 合計: 433
  console.log(`平均: ${result.average}`); // 平均: 86.6
  console.log(`最大: ${result.max}`); // 最大: 92
  console.log(`最小: ${result.min}`); // 最小: 78
}
