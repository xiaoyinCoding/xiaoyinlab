const userService = require('../service/user.service')

class UserController {
  create(ctx, next) {
    const user = ctx.request.body

    userService.create(user)

    ctx.body = '创建用户成功~'
  }
}

module.exports = new UserController()