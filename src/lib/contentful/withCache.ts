function withCache<T>(loader: () => Promise<T>): () => Promise<T> {
  let promise: Promise<T> | null = null;

  return () => {
    if (!promise) {
      promise = loader().catch((error) => {
        throw error;
      });
    }
    return promise;
  };
}

export default withCache;
