import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Animation from "App/Models/Animation";

export default class UpdateController {
  public async index({}: HttpContextContract) {
    const animation = await Animation.findOrFail(1);
    animation.react = false;
    animation.flutter = true;

    await animation.save();
    return animation;
  }
}
