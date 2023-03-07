import fastify from "fastify";
import cors from "@fastify/cors";
import { transactionsRouteAutor } from "./rotas/autor";
import { transactionsRouteGeneros } from "./rotas/generos";
import { transactionsRouteLivros } from "./rotas/livros";
import { transactionsRouteUsuarios } from "./rotas/usuarios";

const app = fastify();

app.register(cors, { 

})

app.register(transactionsRouteAutor)
app.register(transactionsRouteGeneros)
app.register(transactionsRouteLivros)
app.register(transactionsRouteUsuarios)


app.listen({
    port:3333,
}).then(()=> {
    console.log("o servidor esta rodando")
});