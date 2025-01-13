import hero from '../../assets/hero.png'
export { Homepage };

const Homepage = () => {
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
