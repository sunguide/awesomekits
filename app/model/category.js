// app/model/repos.js
module.exports = app => {
    const mongoose = app.mongoose;
    const CategorySchema = new mongoose.Schema({
        id: {type: String},
        pid: {type: String},
        name: {type: String},
        url: {type: String},
        level: {type: Number},
	    remark:{type: String},
        status:{type: String},
        description: {type: String},
    },{timestamps: true});

    return mongoose.model('Category', CategorySchema);
}
