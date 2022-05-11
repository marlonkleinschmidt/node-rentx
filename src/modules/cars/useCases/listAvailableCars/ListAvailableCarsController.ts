import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";


class ListAvailableCarsController{

  constructor(){}

  async handle(request: Request, response: Response): Promise<Response>{
  
    // obtem os parametro do request
    const {brand, name, category_id } = request.query;
  
    // instancia o usecase
    const listAvailableCarsUseCase = container.resolve(ListAvailableCarsUseCase);

    // executa o usecase
    const cars = await listAvailableCarsUseCase.execute({
      brand: brand as string, 
      name: name as string,
      category_id: category_id as string
    });

    return response.json(cars);      

  }

}

export { ListAvailableCarsController };