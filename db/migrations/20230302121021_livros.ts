import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable('livros',(table) =>{

        table.increments('id').primary();
        table.text('titulo').notNullable();
        table.integer('autor_id').notNullable();
        table.integer('genero_id').notNullable();
        table.integer('ano').notNullable();
        table.integer('ISBN').notNullable();
        table.text('descricao').notNullable();
        table.text('imagem').notNullable();
        table.float('preco').notNullable();
        table.float('avaliacao').notNullable();
      
    })
}


export async function down(knex: Knex): Promise<void> {
}

