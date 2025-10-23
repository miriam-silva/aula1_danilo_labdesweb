import '../App.css';

const Challenge = () => {
  const num1 = 5;
  const num2 = 8;

  const handleSoma = () => {
    console.log("A soma é:", num1 + num2);
  };

  return (
    <div className="containerchallenge">
      <p>1° valor: {num1}</p>
      <p>2° valor: {num2}</p>
      <button onClick={handleSoma}>Somar valores</button>
    </div>
  );
};

export default Challenge;
