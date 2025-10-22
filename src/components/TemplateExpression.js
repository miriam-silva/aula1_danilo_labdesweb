const TemplateExpression = () => {
  const nome = "Miriam";
  const data = {
    age: 19,
    job: "Estudante",

  };
    return (
    <div>
        <h1>olá {nome}, seja bem vindo!</h1>
        <p>Você atua como: {data.job}</p>
        <p>{console.log("JSX React")}</p>
    </div>
  )
};

export default TemplateExpression;