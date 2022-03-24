import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.resource("animations", "AnimationsController").apiOnly();
Route.resource("update", "UpdateController").apiOnly();
Route.resource("reactqrs", "ReactQrsController").apiOnly();
Route.resource("flutterqrs", "FlutterQrsController").apiOnly();
