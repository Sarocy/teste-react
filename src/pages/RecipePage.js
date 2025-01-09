import React from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/RecipePage.css";



const recipesData = {
    1: {
      title: "Lasanha de Garfield",
      description: "Uma deliciosa lasanha inspirada no Garfield.",
      image: "lasanha.png",
      steps: [
        "Pré-aqueça o forno a 180°C.",
        "Cozinhe a massa da lasanha conforme as instruções da embalagem.",
        "Prepare o molho bolonhesa: refogue cebola, alho e carne moída; adicione molho de tomate e tempere a gosto.",
        "Faça o molho branco: derreta manteiga, adicione farinha e leite, mexendo até engrossar. Tempere com sal e noz-moscada.",
        "Em uma travessa, monte camadas alternadas de massa, molho bolonhesa, molho branco e queijo.",
        "Finalize com queijo parmesão por cima.",
        "Leve ao forno por 30 minutos até gratinar.",
        "Sirva quente e aproveite!"
      ],
    },
    2: {
      title: "Cannoli de Poderoso Chefão",
      description: "Cannoli clássico inspirado no Poderoso Chefão.",
      image: "cannoli.png",
      steps: [
        "Misture farinha, açúcar e uma pitada de sal em uma tigela.",
        "Adicione manteiga e vinho branco até formar uma massa firme.",
        "Abra a massa em uma superfície enfarinhada e corte em círculos.",
        "Enrole os círculos em tubos de metal e frite em óleo quente até dourar.",
        "Deixe esfriar e retire os tubos.",
        "Prepare o recheio: misture ricota, açúcar, essência de baunilha e gotas de chocolate.",
        "Recheie os cannoli com a mistura de ricota usando um saco de confeiteiro.",
        "Polvilhe açúcar de confeiteiro por cima e sirva!"
      ],
    },
    3: {
      title: "Churros de Chaves",
      description: "Churros recheados e deliciosos do Chaves.",
      image: "churros.png",
      steps: [
        "Em uma panela, misture água, açúcar, sal e manteiga e leve ao fogo até ferver.",
        "Adicione farinha de trigo de uma vez e mexa vigorosamente até formar uma massa lisa.",
        "Deixe a massa esfriar um pouco e coloque em um saco de confeiteiro com bico estrela.",
        "Aqueça o óleo em uma panela e frite os churros até dourar.",
        "Recheie os churros com doce de leite usando um bico de confeiteiro.",
        "Polvilhe com açúcar e canela.",
        "Sirva quente!"
      ],
    },
    4: {
      title: "Ratatouille de Ratatouille",
      description: "Ratatouille clássico inspirado na animação.",
      image: "ratatouille.png",
      steps: [
        "Corte berinjela, abobrinha, tomate e pimentão em rodelas finas.",
        "Em uma assadeira, espalhe molho de tomate temperado como base.",
        "Arrume as rodelas de legumes em fileiras alternadas.",
        "Tempere com sal, pimenta, alho picado e ervas de Provence.",
        "Regue com azeite de oliva.",
        "Cubra com papel alumínio e leve ao forno a 180°C por 30 minutos.",
        "Retire o papel e asse por mais 10 minutos para dourar.",
        "Sirva quente ou frio."
      ],
    },
    5: {
      title: "Donuts de Simpsons",
      description: "Donuts coloridos como os de Homer Simpson.",
      image: "donuts.png",
      steps: [
        "Misture farinha, açúcar, fermento e sal em uma tigela.",
        "Adicione leite morno, manteiga derretida e ovos, misturando até formar uma massa.",
        "Deixe a massa descansar por 1 hora até dobrar de tamanho.",
        "Abra a massa e corte em formatos de donuts.",
        "Frite os donuts em óleo quente até dourar.",
        "Prepare a cobertura: misture açúcar de confeiteiro, leite e corante alimentar.",
        "Mergulhe os donuts na cobertura e adicione confeitos coloridos.",
        "Deixe secar e sirva!"
      ],
    },
    6: {
      title: "Waffles de Stranger Things",
      description: "Waffles icônicos inspirados em Stranger Things.",
      image: "waffles.png",
      steps: [
        "Misture farinha, açúcar, fermento e sal em uma tigela.",
        "Em outra tigela, bata ovos, leite e manteiga derretida.",
        "Combine os ingredientes secos e líquidos até formar uma massa homogênea.",
        "Preaqueça a máquina de waffles e unte com manteiga.",
        "Despeje a massa na máquina e asse até dourar.",
        "Sirva com mel, frutas ou calda de chocolate.",
        "Aproveite os waffles quentinhos!"
      ],
    },
  };
  

  const RecipePage = () => {
    const { id } = useParams();
    const recipe = recipesData[id];
  
    if (!recipe) return <h2>Receita não encontrada!</h2>;
  
    return (
      <div className="recipe-page">
        <div className="recipe-header">
          <div className="recipe-info">
            <h2 className="recipe-special">Chef's Special</h2>
            <h1 className="recipe-title">{recipe.title}</h1>
            <p className="recipe-description">{recipe.description}</p>
          </div>
          <div className="recipePage-image">
            <img src={require(`../assets/images/${recipe.image}`)} alt={recipe.title} />
          </div>
        </div>
  
        <div className="recipe-steps">
          <h2>Modo de Preparo</h2>
          <ul>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default RecipePage;