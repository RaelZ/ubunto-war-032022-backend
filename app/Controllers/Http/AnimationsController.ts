import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Animation from "App/Models/Animation";

export default class AnimationsController {
  public async index({}: HttpContextContract) {
    const task = await Animation.all();
    return task;
  }
  public async store({ request }: HttpContextContract) {
    const data = request.all();
    const task = await Animation.create(data);
    return task;
  }
  public async show({ params }: HttpContextContract) {
    const task = await Animation.findOrFail(params.id);
    return task;
  }
  public async update({ request, params }: HttpContextContract) {
    const task = await Animation.findOrFail(params.id);
    const data = request.all();
    task.merge(data);
    await task.save();
    return task;
  }
  public async destroy({ params }: HttpContextContract) {
    const task = await Animation.findOrFail(params.id);
    await task.delete();
  }
}
