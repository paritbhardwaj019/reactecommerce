export default function ProductImages({ image, setNum }) {
  return (
    <>
      <section className="w-full flex justify-center md:mt-4 mt-2">
        {image.map((currElem, index) => {
          return (
            <div
              className={`max-w-xs w-full md:rounded-lg overflow-hidden cursor-pointer rounded-sm p-1`}
              key={index}
            >
              <img
                src={currElem}
                alt={`Image ${index + 1}`}
                className="w-full md:h-28 md:rounded-lg overflow-hidden hover:border-2 hover: border-violet-500 h-8 rounded-md"
                onClick={() => setNum(index)}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}
