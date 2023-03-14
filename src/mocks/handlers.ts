import { rest } from "msw";
import { mockCharacters } from "./mocks";

const routes = {
  user: "/users",
  login: "/login",
  getCharacters: "/characters",
  character: "/characters",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.user}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "vik27634fvj" }))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.character}${routes.getCharacters}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(mockCharacters))
  ),
];
export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.character}${routes.getCharacters}`,
    (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
];
