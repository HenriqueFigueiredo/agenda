import * as dotenv from "dotenv";
import express from "express";
import CadastroContatosRoute from "./routes/cadastro.contatos.route";
import ConsultaContatosRoute from "./routes/consulta.contatos.route";
import DelecaoContatosRoute from "./routes/delecao.contatos.route";
import EdicaoContatosRoute from "./routes/edicao.contatos.route";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}
 
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(express.json());

app.use('/', new ConsultaContatosRoute().router);
app.use('/', new CadastroContatosRoute().router);
app.use('/', new EdicaoContatosRoute().router); 
app.use('/', new DelecaoContatosRoute().router)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});