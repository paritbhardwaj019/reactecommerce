export default function InputControl({
  label,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <div className="w-full text-left mb-4">
      <p className="font-semibold text-lg">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-[#ECF0F1] border-2 outline-none rounded-md px-2 py-2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
