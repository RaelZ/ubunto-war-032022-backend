import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Animation from "App/Models/Animation";

export default class FlutterQrsController {
  public async update({ request, params }: HttpContextContract) {
    const db = await Animation.findOrFail(params.id);
    const vm = request.only(["url"]);

    if (db.url == vm.url) db.flutter = true;
    if (db.react == true) db.react = false;

    await db.save();
    return db;
  }
}
