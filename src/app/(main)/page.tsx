import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="font-[family-name:Helvetica Neue, Helvetica, Arial, sans-serif]">
      <ToastContainer position="top-right" autoClose={5000} />
    </main>
  );
}
