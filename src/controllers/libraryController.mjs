import LibraryModel from "../modals/LibraryModel.mjs";


const addBooks= async (req,res)=>{
  try{
    const data = req.body;

    const createdBooks= await LibraryModel.create(data)
    res.status(201).send({ status:"Book Added Successfully",message:createdBooks})
  }
  catch(error){
    return res.status(400).send({
        status:'Invalid request data',message:error.message
    })
  }

}

const findBooks=async(req,res)=>{
   

    try{
        const books=await LibraryModel.find();
    res.status(200).send({ status:"Array of books matching the search criteria",message:books})
    }
      
    catch(error){
        return res.status(400).send({
            status:' Invalid search parameters',message:error.message

        })
    }

}
const updateBooks=async(req,res)=>{
   
    const Id = req.params.id;
    const newData = req.body;
    const newbooks=await LibraryModel.findByIdAndUpdate({_id:Id}, newData, { new: true });
    res.status(200).send({ status:"Book updated successfully",message:newbooks})
      


}

const deletebooks=async (req,res)=>{
    try{
        const Id = req.params.id;
      const deleteddata=await LibraryModel.findByIdAndDelete({_id:Id})
      return res.status(200).send({status:"Book deleted successfully",message:deleteddata});
    }
    catch(error){
     return res.status(404).send({
         status:'Book not found',message:error.message
     })
    }
 }



export{addBooks,findBooks,deletebooks,updateBooks};