export function branchName(ref) {
  const branchPrefix = "refs/heads/";
  if (ref.startsWith(branchPrefix)) {
    return ref.substr(branchPrefix.length);
  }
}
