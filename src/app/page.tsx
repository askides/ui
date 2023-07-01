export default function Page() {
  return (
    <div className="h-full flex-1 overflow-y-auto bg-white px-10 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Button</h2>
        <p className="mt-1 text-lg font-light text-zinc-600">
          Display an HTML standard button.
        </p>
      </div>

      <div className="max-w-[56rem]">
        <div className="flex items-end gap-5 justify-between pb-2">
          <h3 className="font-medium">Primary</h3>
          <div className="flex space-x-1 rounded-lg bg-black/5 p-1">
            <button
              className="flex items-center rounded-md bg-white py-1.5 pl-3 pr-3 text-sm font-semibold shadow"
              type="button"
            >
              <span className="sr-only text-black/80 lg:not-sr-only">
                Preview
              </span>
            </button>
            <button
              className="flex items-center rounded-md py-1.5 pl-3 pr-3 text-sm font-semibold"
              type="button"
            >
              <span className="sr-only text-black/60 lg:not-sr-only">Code</span>
            </button>
          </div>
        </div>
        <div className="grid h-48 place-content-center rounded-xl border border-black/10">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Badge
          </span>
        </div>
      </div>
    </div>
  );
}
