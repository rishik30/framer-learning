export default function Avatar() {
  return (
    <div className="flex items-center gap-4">
      <div className="ring-foregroundSecondary relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 ring-2 dark:bg-gray-600">
        <span className="p-1 font-medium text-white dark:text-gray-300">
          JL
        </span>
      </div>

      <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Joined in August 2014
        </div>
      </div>
    </div>
  );
}
