type OnChange = (args: { currentIndex: number; prevIndex: number }) => void;
type Strategy = (index: number) => number;

function createIndexController(strategy: Strategy, onChange: OnChange) {
  let currentIndex = 0;
  let prevIndex: number | null = null;

  const set = (index: number) => {
    prevIndex = currentIndex;
    currentIndex = strategy(index);
    onChange({ prevIndex, currentIndex });
    return currentIndex;
  };

  return {
    next: () => set(currentIndex + 1),
    prev: () => set(currentIndex - 1),
    getValue: () => currentIndex,
  };
}

export default createIndexController;
