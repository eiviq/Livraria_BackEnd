import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable('livros',(table) =>{

        table.increments('id').primary();
        table.text('titulo').notNullable();
        table.integer('ano').notNullable();
        table.integer('ISBN').notNullable();
        table.text('descricao').notNullable();
        table.text('imagem').notNullable();
        table.float('preco').notNullable();
        table.float('avaliacao').notNullable();
        table.integer('autor_id').unsigned();
        table.foreign('autor_id').references('autor.id');
        table.integer('generos_id').unsigned();
        table.foreign('generos_id').references('generos.id');
        table.integer('editoras_id').unsigned();
        table.foreign('editoras_id').references('editoras.id');
      
    })
}


export async function down(knex: Knex): Promise<void> {
}

