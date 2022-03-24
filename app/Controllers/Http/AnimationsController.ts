import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Animation from "App/Models/Animation";

export default class AnimationsController {
  public async index({}: HttpContextContract) {
    const animation = await Animation.all();
    return animation;
  }
  public async store({ request }: HttpContextContract) {
    const data = request.all();
    const animation = await Animation.create(data);
    return animation;
  }
  public async show({ params }: HttpContextContract) {
    const animation = await Animation.findOrFail(params.id);
    return animation;
  }
  public async update({ request, params }: HttpContextContract) {
    const animation = await Animation.findOrFail(params.id);
    const data = request.all();
    animation.merge(data);
    await animation.save();
    return animation;
  }
  public async destroy({ params }: HttpContextContract) {
    const animation = await Animation.findOrFail(params.id);
    await animation.delete();
  }
}
