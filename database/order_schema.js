


var Schema = {};

Schema.createSchema = function(mongoose) {
    console.log('createSchema 호출됨.');
    
    mongoose.set('useCreateIndex', true);
    var ShoppingSchema = mongoose.Schema({clinic:[{
        adtFrDd: {type:[String], requied:true, 'default':''},
        hospTyTpCd: {type:[String], 'default':''}, // 국민 안심 병원의 경우만 해당
        sgguNm: {type:[String], requied:true, 'default':''},
        sidoNm: {type:[String], requied:true, 'default':''},
        spclAdmTyCd:{type:[String], required:true, 'default':''},
        telno: {type:[String], required:true, 'default':''},
        yadmNm: {type:[String], required:true, 'default':''}
    }]});
    console.log('ShoppingSchema 정의함.');

    // mongoose에서 직접 메서드 추가 method이용

    // mongoose에서 직접 메서드 추가 static이용
    
    return ShoppingSchema;
}

module.exports = Schema;