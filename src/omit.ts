export default function omit<T extends Object, K extends keyof T>(obj: T, fields: K[]): Omit<T, K> {
  const result = {...obj};
  if (Array.isArray(fields)) {
    fields.forEach(key => {
      delete result[key]
      // Reflect.deleteProperty(obj, key);
    })
  }
  return result;
}
