// src/mocks/handlers.js
import { rest } from "msw";
import CONFIGS from "../configs/configs";

const BASE_URL = CONFIGS.BASE_URL;

export const handlers = [
  rest.get(`${BASE_URL}/contact`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "Get contacts",
        data: [
          {
            id: "93ad6070-c92b-11e8-b02f-cbfa15db428b",
            firstName: "Luke",
            lastName: "Skywalker",
            age: 111,
            photo:
              "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
          },
          {
            id: "b3abd640-c92b-11e8-b02f-cbfa15db428b",
            firstName: "Bilbo",
            lastName: "Baggins",
            age: 20,
            photo: "N/A",
          },
        ],
      })
    );
  }),
  rest.post(`${BASE_URL}/contact`, (req, res, ctx) => {
    return res(
      ctx.status(202),
      ctx.json({
        message: "Success!",
      })
    );
  }),
  rest.put(
    `${BASE_URL}/93ad6070-c92b-11e8-b02f-cbfa15db428b`,
    (req, res, ctx) => {
      return res(
        ctx.status(202),
        ctx.json({
          message: "Success!",
        })
      );
    }
  ),
  rest.delete(
    `${BASE_URL}/93ad6070-c92b-11e8-b02f-cbfa15db428b`,
    (req, res, ctx) => {
      return res(
        ctx.status(400),
        ctx.json({
          message: "contact unavailable",
        })
      );
    }
  ),
];
