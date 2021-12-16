# final-year-project-
const dbConnection = async()=>{
    try {
        await mongoose.connect(
          "mongodb+srv://Rakesh999:Rakesh999@crud.yqvo1.mongodb.net/Studentapi?retryWrites=true&w=majority"
        ,{useNewUrlParser :true,useUnifiedTopology:true});
    } catch (error) {
        console.log(error);
    }
}