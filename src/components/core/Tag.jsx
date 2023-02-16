export default function Tag({ name }) {
  return (
    <>
      <button className="md:px-6 md:py-2 rounded-sm text-black font-medium md:text-lg bg-white px-4 py-1 text-sm hover:shadow-xl hover:shadow-black/20 mb-4 mr-4 md:mr-0 md:mb-0">
        {name}
      </button>
    </>
  );
}
