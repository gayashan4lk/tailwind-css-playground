export default function AlertBox() {
  return (
    <div className="m-2 w-92 rounded-md border-2 border-fuchsia-500 bg-white p-4 shadow-lg">
      <h3 className="mb-2 text-2xl font-bold text-fuchsia-600 antialiased">
        An Important Alert
      </h3>
      <p className="antialiased">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="mt-3 space-x-2">
        <button className="rounded-md border-2 border-fuchsia-500 bg-fuchsia-200 px-2 py-1 font-semibold text-fuchsia-600 antialiased">
          Confirm
        </button>
        <button className="rounded-md border-2 border-fuchsia-500 px-2 py-1 font-semibold text-fuchsia-600 antialiased">
          Cancel
        </button>
      </div>
    </div>
  )
}
