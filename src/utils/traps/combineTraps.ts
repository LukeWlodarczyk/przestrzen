export interface Trap {
  activate: () => void;
  deactivate: () => void;
}

const combineTraps = (...traps: Trap[]) => ({
  activate() {
    traps.forEach((trap) => trap.activate());
  },
  deactivate() {
    traps.forEach((trap) => trap.deactivate());
  },
});

export default combineTraps;
