export default function AlertBox() {
  return (
    <div className="m-2 w-92 rounded-md border-2 border-purple-400 bg-slate-50 p-4 shadow-lg">
      <h3 className="mb-2 text-2xl font-semibold text-purple-500 antialiased">
        An Important Alert
      </h3>
      <p className="antialiased">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="mt-3 flex flex-row gap-2">
        <button className="rounded-md border-2 border-purple-700 bg-purple-500 px-2 py-1 text-white antialiased">
          Confirm
        </button>
        <button className="rounded-md border-2 border-fuchsia-300 px-2 py-1 text-fuchsia-400 antialiased">
          Cancel
        </button>
      </div>
    </div>
  )
}
