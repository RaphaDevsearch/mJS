import { 
  Header, Main, Footer 
} from './Compoents.js'


const app = document.querySelector('.app')
console.log(app);


app.append(
  Header.render(),
  Main.render(),
  Footer.render()
)