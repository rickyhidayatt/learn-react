const ButtonWithProp = (props) => {
  return (
    <button
      type="button"
      className={`h-10 px-6 font-semibold rounded-md ${props.warna} text-white`}
    >
      {/* bisa juga pake prop.nama kelas contoh dibawah 
        pake class text. jadinya props.text */}
      {props.children}
      {/* kalo pake children jadi kaya yg dibawah nya yang akan di execute */}
    </button>
  );
};

// kalo mau eksport jangan lupa pake export default nama variabel
export default ButtonWithProp;
