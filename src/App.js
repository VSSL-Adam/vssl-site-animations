import Title from "./components/Title";
import Crew from "./components/Crew";
import Button from "./components/Button";
import NavLink from "./components/NavLink";
import Salt from "./components/Salt";
import HeaderNav from "./components/HeaderNav";
// import Mouse from "./components/Mouse";

const App = () => {
  return (
    <>
      {/* <Mouse /> */}
      <HeaderNav />
      <div className="container">
        <Title text="Work from the crew" />
      </div>
      <div className="container">
        <Salt title="Lock in the strategy and crack off" />
      </div>
      <div className="container">
        <Button
          button_class="primary"
          title="Discovery More"
          type="link"
          src="https://vsslagency.com"
          target="_blank"
        />
        <Button
          button_class="secondary"
          title="Discovery More"
          type="link"
          src="https://vsslagency.com"
          target="_blank"
        />
      </div>
      <div className="container">
        <NavLink src="/" title="Subnav Link" />
      </div>
      <Crew />
    </>
  );
};
export default App;
