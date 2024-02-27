const mongoose = require('mongoose');



let mongoConfig = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.wbv4eep.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => console.log('Connected!'));
}
// let mongoConfig = () => {
//     mongoose.connect(`mongodb+srv://ecom:unFkyggfiTOLaDPd@cluster0.wbv4eep.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`)
//         .then(() => console.log('Connected!'));
// }

module.exports = mongoConfig;