interface NetworkConnection extends EventTarget {
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

declare global {
  interface Navigator {
    connection?: NetworkConnection;
  }
}

const MIN_DOWNLINK_MBPS = 10;
const MIN_EFFECTIVE_TYPE = "4g";

const whenHighBandwidth = (cb: () => void) => {
  if (!isNavigatorConnectionSupported()) return cb();

  const connection = navigator.connection as NetworkConnection;

  const handleConnectionChange = () => {
    if (isHighBandwidth(connection)) {
      cb();
      connection.removeEventListener("change", handleConnectionChange);
    }
  };

  if (isHighBandwidth(connection)) return cb();
  else connection.addEventListener("change", handleConnectionChange);
};

function isNavigatorConnectionSupported() {
  return Boolean("connection" in navigator && navigator.connection);
}

function isHighBandwidth(connection: NetworkConnection) {
  const { effectiveType, downlink } = connection;

  const isMinEffectiveType = effectiveType === MIN_EFFECTIVE_TYPE;
  const isMinDownlink = downlink && downlink >= MIN_DOWNLINK_MBPS;

  return isMinEffectiveType || isMinDownlink;
}

export default whenHighBandwidth;
