export function groupZeroCoordinatesWithNeighbors(matrix) {
  const visited = new Set();
  const groups = [];

  // Проходимся по всей матрице
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const cell = [i, j];

      // Если ячейка == 0 и не посещалась, ищем группу
      if (matrix[i][j] === 0 && !visited.has(cell.toString())) {
        visited.add(cell.toString());
        const queue = [cell];
        const group = [cell];

        // Обходим соседние ячейки в ширину
        while (queue.length > 0) {
          const [x, y] = queue.shift();

          // Проверяем соседние ячейки
          for (const [dx, dy] of [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
          ]) {
            const [nx, ny] = [x + dx, y + dy];
            const neighbor = [nx, ny];

            // Если сосед ячейка == 0 и не посещалась, добавляем в группу
            if (
              nx >= 0 &&
              nx < matrix.length &&
              ny >= 0 &&
              ny < matrix[0].length &&
              matrix[nx][ny] === 0 &&
              !visited.has(neighbor.toString())
            ) {
              queue.push(neighbor);
              visited.add(neighbor.toString());
              group.push(neighbor);
            } else if (
              // Если сосед ячейка !== 0, добавляем координаты соседа
              nx >= 0 &&
              nx < matrix.length &&
              ny >= 0 &&
              ny < matrix[0].length &&
              !group.some((cell) => cell.toString() === neighbor.toString())
            ) {
              group.push(neighbor);
            }
          }
        }

        // Добавляем новую группу в массив групп
        groups.push(group);
      }
    }
  }

  return groups;
}
