export function cn(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

//এই function conditional Tailwind class join করার জন্য।
//Example :
// cn(
//   'rounded-lg border',
//   hasError && 'border-danger',
//   isLoading && 'opacity-60'
// );
