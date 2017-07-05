// app/model/repos.js
module.exports = app => {
    const mongoose = app.mongoose;
    const KitSchema = new mongoose.Schema({
        id: {type: String},
        uid:{type: Number},
        name: {type: String},
        home_url: {type: String},   //项目地址
	    demo_url:{type: String},
        author:{type: String},
        description:{type: String},
        tags:{type: Array},
        icon:{type: String},        //项目图标
        cover:{type: String},       //项目预览图
        deployedAt: {type: String}
    },{timestamps: true});

    return mongoose.model('Kit', KitSchema);
}
