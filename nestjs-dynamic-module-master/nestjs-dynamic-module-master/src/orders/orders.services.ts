import { Injectable } from "@nestjs/common";
import { UserService } from "src/users/users.services";
@Injectable()
export class OrderService {
    constructor(private userService: UserService) {
    console.log("🚀 ~ file: orders.services.ts:5 ~ OrderService ~ userService:", userService)
    }
}
