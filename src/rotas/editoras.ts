import { cone } from "../database";
import {z} from 'zod';
import { FastifyInstance } from "fastify";

export async function transactionsRouteEditoras(app : FastifyInstance){

    app.post('/editoras/criar' , async (request ,reply) =>{
        
        const criarTransacao = z.object({
        nome: z.string(),
        
       
        })
      
        const body = criarTransacao.parse(request.body);
      
        const transacao =  await cone('editoras').insert({
         nome: body.nome,
         

        })
            return reply.status(201).send();
         
      })
    
        app.get('/editoras' , async (request ,reply) =>{
    
            const editoras = await cone('editoras').select();
    
            return {editoras};
        })
    
      app.get('/editoras/:id' , async (request ,reply) =>{
    
        const getParamsScheema = z.object({
            id : z.any(),
        })
    
        const params = getParamsScheema.parse(request.params);
    
        const editoras = await cone('editoras').where('id',params.id).first();
    
        return {editoras};
      })
    
      app.delete('/editoras/deletar/:id' , async (request ,reply) =>{
    
        const getParamsScheema = z.object({
            id : z.any(),
        })
    
        const params = getParamsScheema.parse(request.params);
    
        const editoras = await cone('editoras').where('id',params.id).del();
    
        return reply.status(404).send();
      })

      app.get('/editoras/nome/:nome' , async (request ,reply) =>{
    
        const getParamsScheema = z.object({
            nome : z.string(),
        })
    
        const params = getParamsScheema.parse(request.params);
    
        const editoras= await cone('editoras').where('nome',params.nome).first();
    
        return {editoras};
      })


      app.put('/editoras/atualizar/:id' , async (request ,reply) =>{
        
        const criarTransacao = z.object({
        nome: z.string(),      
        })

        const getParamsScheema = z.object({
         id : z.any(),
      })

        const body = criarTransacao.parse(request.body);
        const params = getParamsScheema.parse(request.params);

        const transacao =  await cone('editoras').where('id',params.id).update({
         nome: body.nome,
        })
            return reply.status(200).send();
         
      })
    }