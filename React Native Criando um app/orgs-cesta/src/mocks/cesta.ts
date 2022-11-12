import images from "../../assets/images";

const cesta = {
  Header: {
    Title: "Detalhe da cesta",
  },
  Details: {
    Name: "Cesta de Verduras",
    ProfilePicture: images.farm,
    ProfileName: "Jenny Jack Farm",
    Description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    Price: "R$ 40,00",
    Button: "Comprar",
  },
  Itens: {
    Title: "Itens da cesta",
    List: [
      {
        Name: "Abóbora",
        Image: images.abobora,
      },
      {
        Name: "Batata",
        Image: images.batata,
      },
      {
        Name: "Brócolis",
        Image: images.brocolis,
      },
      {
        Name: "Pepino",
        Image: images.pepino,
      },
      {
        Name: "Tomate",
        Image: images.tomate,
      },
    ]
  }
}

export default cesta;