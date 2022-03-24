import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class Animation extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  url: string;

  @column()
  react: boolean;

  @column()
  flutter: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
