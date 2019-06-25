
    let UserFactory = function (role) {
        if (this instanceof UserFactory) {
            return new this[role]();
        } else {
            return new UserFactory(role);
        }
    }

    //工厂方法函数的原型中设置所有对象的构造函数
    UserFactory.prototype = {
        SuperAdmin: function () {
            this.name = "超级管理员";
            this.viewPage = ['首页', '通讯录', '发现页', '应用数据', '权限管理']
        },
        Admin: function () {
            this.name = "管理员";
            this.viewPage = ['首页', '通讯录', '发现页', '应用数据']
        },
        NormalUser: function () {
            this.name = '普通用户';
            this.viewPage = ['首页', '通讯录', '发现页']
        }
    }

    //调用

    console.log(UserFactory('SuperAdmin'))
    console.log(UserFactory('Admin'))

    console.log(UserFactory('NormalUser'))
