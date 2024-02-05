import { useState } from "react"
import { Button, Button2} from "./components/Button.style"
import { Title, TitleSmall } from "./components/Title.style"
import { Wrapper } from "./components/Wrapper.style"
import { Link } from "./components/Link.style";

function App() {

  const [showingMessage, setShowingMessage] = useState(false);

  return (
    <Wrapper>
      <Title fontSize ="50" color="#232323" width="30vw" height="10vh">
        Aqui ficará o título personalizado
        <span>SPAN AQUI EINNN</span>
      </Title>
      <TitleSmall fontSize ="35">Titulo menor - small</TitleSmall>
      <Wrapper flexDirection="row" justifyContent="center">
        <Button backgroundColor="salmon" onClick={() =>{setShowingMessage(true)}}>Exibir mensagem</Button>
        <Button backgroundColor="red" onClick={() => {setShowingMessage(false)}}>Esconder mensagem</Button>
        <Button2>Componente button2</Button2>
        <Link> Clique aqui no link componente</Link>
      </Wrapper>
      {showingMessage? "Exibindo texto aljwahsjhajgshagsahsjaghfadgsffdtawtwqr7eq" : "Não há mensagem para exibir aqui"}
    </Wrapper>
  )
}

export default App
