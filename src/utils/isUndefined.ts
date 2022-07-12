function isUndefined(v: unknown): v is undefined {
  return v === void 0;
}

export default isUndefined;
