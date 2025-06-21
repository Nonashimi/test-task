
type Props = {
  className?: string,
  phone: string,
  setPhone: (value:string) => void,
}
export default function PhoneInputCustom({className, phone, setPhone}:Props) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    let numbers = value.replace(/\D/g, '');

    if (numbers.startsWith('8')) numbers = numbers.slice(1);
    if (numbers.startsWith('7')) numbers = numbers.slice(1);

    let formatted = '+7';
    if (numbers.length > 0) formatted += ` (${numbers.slice(0, 3)}`;
    if (numbers.length >= 4) formatted += `) ${numbers.slice(3, 6)}`;
    if (numbers.length >= 7) formatted += `-${numbers.slice(6, 8)}`;
    if (numbers.length >= 9) formatted += `-${numbers.slice(8, 10)}`;

    setPhone(formatted);
  };

  return (
      <input
        type="tel"
        value={phone}
        onChange={handleChange}
        className={`w-full p-2 border rounded bg-[#222] text-white ${className}`}
        placeholder="+7 (___) ___-__-__"
      />
  );
}
