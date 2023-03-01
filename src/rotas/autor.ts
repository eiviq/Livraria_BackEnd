import { cone } from "../database";
import {z} from 'zod';
import { FastifyInstance } from "fastify";

export async function transactionsRouteAutor(app : FastifyInstance){
    app.post('/autor/criar', async (request, reply) =>{
        const criarTransacao = z.object({
        nome: z.string(),
        sobrenome: z.string(),
        formação: z.string(),
        nacionalidade: z.string(),
        })
      
        const body = criarTransacao.parse(request.body);
        const transacao =  await cone('autor').insert({
         nome: body.nome,
        sobrenome: body.sobrenome,
        formação: body.formação,
        nacionalidade: body.nacionalidade
        })
            
        return reply.status(201).send();
         
      })
    
        app.get('/autor', async (request, reply) =>{
            const autor = await cone('autor').select();
    
            return {autor};
        })
    
      app.get('/autor/:id', async (request, reply) =>{
        const getParamsScheema = z.object({
            id : z.any(),
        })
    
        const params = getParamsScheema.parse(request.params);
    
        const autor = await cone('autor').where('id', params.id).first();
    
        return {autor};
      })
    
      app.delete('/autor/deletar/:id', async (request, reply) =>{
        const getParamsScheema = z.object({
            id : z.any(),
        })
    
        const params = getParamsScheema.parse(request.params);
    
        const autor = await cone('autor').where('id', params.id).del();
    
        return reply.status(404).send();
      })

      app.get('/autor/nome/:nome', async (request, reply) =>{
            const getParamsScheema = z.object({
            nome: z.string(),
        })
    
        const params = getParamsScheema.parse(request.params);
    
        const autor = await cone('autor').where('nome', params.nome).first();
    
        return {autor};
      })


app.put('/autor/atualizar/:id', async (request, reply) =>{
    const criarTransacao = z.object({
    nome: z.string(),
    sobrenome: z.string(),
    formação: z.string(), 
    nacionalidade: z.string(),
    })

    const getParamsScheema = z.object({
     id : z.any(),

  })

    const body = criarTransacao.parse(request.body);
    const params = getParamsScheema.parse(request.params);
    const transacao =  await cone('autor').where('id', params.id).update({
     nome: body.nome,
     sobrenome: body.sobrenome,
     formação: body.formação,
     nacionalidade: body.nacionalidade,

    })
        return reply.status(200).send();   
  })

}