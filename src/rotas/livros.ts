import { cone } from "../database";
import {z} from 'zod';
import { FastifyInstance } from "fastify";

export async function transactionsRouteLivros(app : FastifyInstance){

    app.post('/livros/criar' , async (request ,reply) =>{
        
        const criarTransacao = z.object({
        titulo: z.string(),
        autor_id: z.number(),
        genero_id: z.number(),
        ano: z.number(),
        ISBN: z.number(),
        descricao: z.string(),
        imagem: z.string(),
        preco: z.number(),
        avaliacao: z.number()
       
        })
      
        const body = criarTransacao.parse(request.body);
      
        const transacao =  await cone('livros').insert({
         titulo: body.titulo,
         autor_id: body.autor_id,
         genero_id: body.genero_id,
         ano: body.ano,
         ISBN: body.ISBN,
         descricao: body.descricao,
         imagem: body.imagem,
         preco: body.preco,
         avaliacao: body.avaliacao

        })
            return reply.status(201).send();
         
      })
    
        app.get('/livros' , async (request ,reply) =>{
    
            const livros = await cone('livros').select();
    
            return {livros};
        })
    
      app.get('/livros/:id' , async (request ,reply) =>{
    
        const getParamsScheema = z.object({
            id : z.any(),
        })
    
        const params = getParamsScheema.parse(request.params);
    
        const livros = await cone('livros').where('id',params.id).first();
    
        return {livros};
      })
    
      app.delete('/livros/deletar/:id' , async (request ,reply) =>{
    
        const getParamsScheema = z.object({
            id : z.any(),
        })
    
        const params = getParamsScheema.parse(request.params);
    
        const livros = await cone('livros').where('id',params.id).del();
    
        return reply.status(404).send();
      })

      app.get('/livros/titulo/:titulo' , async (request ,reply) =>{
    
        const getParamsScheema = z.object({
            titulo : z.string(),
        })
    
        const params = getParamsScheema.parse(request.params);
    
        const livros = await cone('livros').where('titulo',params.titulo).first();
    
        return {livros};
      })


      app.put('/livros/atualizar/:id' , async (request ,reply) =>{
        
        const criarTransacao = z.object({
            titulo: z.string(),
            autor_id: z.number(),
            genero_id: z.number(),
            ano: z.number(),
            ISBN: z.number(),
            descricao: z.string(),
            imagem: z.string(),
            preco: z.number(),
            avaliacao: z.number()  
        })

        const getParamsScheema = z.object({
         id : z.any(),
      })

        const body = criarTransacao.parse(request.body);
        const params = getParamsScheema.parse(request.params);

        const transacao =  await cone('livros').where('id',params.id).update({
            titulo: body.titulo,
            autor_id: body.autor_id,
            genero_id: body.genero_id,
            ano: body.ano,
            ISBN: body.ISBN,
            descricao: body.descricao,
            imagem: body.imagem,
            preco: body.preco,
            avaliacao: body.avaliacao
        })
            return reply.status(200).send();
         
      })
    }