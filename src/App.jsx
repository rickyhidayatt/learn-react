import LoginForm from "./components/fragments/formLogin";
// import InputForm from "./components/elements/input";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600">LOGIN</h1>
        <p className="font-mini text-slate-500">
          Welcome Please enter your details
        </p>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
