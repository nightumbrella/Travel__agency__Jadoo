import { Header, Footer, Category, Selling, Steps, Testimonials, Logo, Subscribe } from "./components";
function App() {
  return (
    <div className="container overflow-hidden">
      <Header />
      <Category />
    <Selling/>
      <Steps/>
      <Testimonials/>
      <Logo/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
