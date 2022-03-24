import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Animation from "App/Models/Animation";

export default class ReactQrsController {
  public async update({ request, params }: HttpContextContract) {
    const db = await Animation.findOrFail(params.id);
    const vm = request.only(["url"]);

    if (db.url == vm.url) db.react = true;
    if (db.flutter == true) db.flutter = false;

    await db.save();
    return db;
  }
}
