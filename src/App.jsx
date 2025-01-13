import hero from './assets/hero.png'
export { App };

const App = () => {
  return (
    <div>
      <nav>
        <h1>Mech Industries</h1>
        <button>Go</button>
      </nav>
      <img src={hero} alt="Mecha schematics" />
    </div>
  );
};
