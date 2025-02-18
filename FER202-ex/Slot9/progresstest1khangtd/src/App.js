import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const contactMethods = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
      content: "+8402311111",
      isLink: false,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
      content: "+852 8765 4321",
      isLink: false,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
      content: "fptudn@fpt.edu.vn",
      isLink: true,
      // Sử dụng mailto: để mở ứng dụng email
      href: "mailto:fptudn@fpt.edu.vn",
    },
  ];

  // Các icon mạng xã hội
  const socialMedia = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111483.png",
      href: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/20/20837.png",
      href: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/80/80963.png",
      href: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/733/733635.png",
      href: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/49/49084.png",
      href: "#",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4338/4338894.png",
      href: "#",
    },
  ];
  return (
    <div>
      <Navbar />
      <Body />
      <Footer socialMedia={socialMedia} contactMethods={contactMethods} />
    </div>
  );
}

export default App;
