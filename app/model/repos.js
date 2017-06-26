// app/model/repos.js
module.exports = app => {
    const mongoose = app.mongoose;
    const ReposSchema = new mongoose.Schema({
        id: {type: String},
        name: {type: String},
        git_url: {type: String},
	    demo_url:{type: String},
        author:{type: String},
        description:{type: String},
        tags:{type: Array},
        cover:{type: String},
        readme: {type: String},
        deployedAt: {type: String}
    });

    return mongoose.model('Repos', ReposSchema);
}
