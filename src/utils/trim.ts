export function trim(str: string, size: number, status: boolean) {
  if (str.length <= size) return str;
  if (status) return str;
  if (size <= 3) return str.substring(0, size) + "";
  return str.substring(0, size - 3) + "";
}
