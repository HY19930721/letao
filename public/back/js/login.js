$(function(){

    var $form =$("form");
    //初始化表单校验插件
    $form.bootstrapValidator({
        //配置校验时显示的图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
        //配置校验规则,name的属性
        fields:{
            //配置username的校验规则
            username:{

                //里面可以配置username的所有校验
                validators:{
                    //非空校验
                    notEmpty:{
                        //提示信息
                        message:"用户名不能为空哦"
                    }
                }
            },
            password:{
                validaators:{
                    notEmpty:{
                        message:"密码不能为空哦"
                    },
                    stringLength:{
                        min:6,
                        max:12,
                        message:"密码必须是6-12位"
                    }
                }
            }
        }
    });
});