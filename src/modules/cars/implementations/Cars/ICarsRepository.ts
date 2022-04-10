import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO"
import { Car } from "@modules/cars/infra/typeorm/entities/Car"

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>
  findByLicensPlate(license_plate: string): Promise<Car>
  findAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]>
  findById(id: string): Promise<Car>
  updateAvailable(car_id: string, available: boolean): Promise<void>
}

export { ICarsRepository }