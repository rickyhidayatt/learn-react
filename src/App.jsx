import React from "react";

// class component
class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Purple
      </button>
    );
  }
}

// fungtional component
function ButtonFunctional() {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      Pink
    </button>
  );
}

// props mirip sama penggunaan function di golang pake struct dan jadi argumen dan pake nya arrow function disini contohna
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

function App() {
  return (
    <>
      {/* Penyimpanan class component / fungtional component button harus di antara div  */}
      <Button></Button>

      <ButtonFunctional></ButtonFunctional>
      {/* ini conto penulisan jika pake {props.text} */}
      <ButtonWithProp warna="bg-red-700" text="apa"></ButtonWithProp>
      {/* ini conto penulisan jika pake children, maka yg di proses langsung dari body html text yg tulisan nya "nih pake children"*/}
      <ButtonWithProp warna="bg-slate-700">nih pake children</ButtonWithProp>
    </>
  );
}

export default App;
