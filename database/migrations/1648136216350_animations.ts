import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Animations extends BaseSchema {
  protected tableName = "animations";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("url").notNullable();
      table.boolean("react").notNullable();
      table.boolean("flutter").notNullable();
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
