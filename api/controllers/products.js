const mongoose=require('mongoose');
const Product=require('../models/product');
exports.products_get_all = (req,res,next)=>
{
    Product
    .find()
    .select('name price _id productImage')
    .exec()
    .then(docs=>{
        const response={
            count:docs.length,
            products:docs.map(doc=>{
                return{
                    name:doc.name,
                    price:doc.price,
                    _id:doc._id,
                    productImage:doc.productImage,
                    request:{
                        type:'GET',
                        url:'http://localhost:3000/products/'+doc._id
                    }
                }
            })
        };
        // if(docs.length>=0)
        // {
            res.status(200).json(response);   
        //}
        // else
        // {
        //     res.status(404).json({
        //         message:'No entry is found'
        //     });
        // }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
}
exports.products_create_product =(req,res,next)=>
{
    console.log(req.file)
const product= new Product(
    {
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    price:req.body.price,
    productImage:req.file.path

   });
product
.save()
.then(result=>{
    console.log(result);
    res.status(201).json
    ({
        message:'created product  sucessfully',
        createdproduct:
        {
            name:result.name,
            price:result.price,
            _id:result._id,
            productImage:result.productImage,
            request:{
                type:'POST',
                url:'http://localhost:3000/products/'+result._id
            }   
        }
    });
})
.catch(err=>{
    console.log(err);
    res.status(500).json
    ({
       error:err
    });
});
   
}
exports.products_get_product =(req,res,next)=>
{
const id=req.params.productId;
Product.findById(id)
.select('name price _id productImage')
.exec()
.then(doc=>{
    console.log("from data base",doc);
    
    if(doc)
    {
        res.status(200).json({
            product:doc,
            request:{
                type:'GET',
                description:'get one product',
                url:'http://localhost:3000/products'
            }
        });
    }
    else{
        res.status(404).json({message:'no valid entry found for provided Id'});
    }
})
.catch(err=>{
    console.log(err); 
    res.status(500).json({error:err});
});

}
exports.products_update_product=(req,res,next)=>
{
    const id=req.params.productId;
    const updateOps={};
    for(const Ops of req.body)
    {
        updateOps[Ops.propName]=Ops.value;
    }
   Product.update({_id:id},{$set:updateOps})
   .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json({
           message:'product is updated',
           request:{
               type:'GET',
               url:'http://localhost:3000/products/'+id
           } 
        });
    }).catch(err=>
        {
            console.log(err);
     res.status(500).json({
    error:err
     });
    });
}
exports.products_delete_product =(req,res,next)=>
{
    const id=req.params.productId;
    Product.remove({_id:id})
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            message:'product sucessfully deleted',
            type:'post',
            url:'http://localhost:3000/products',
            body:{name:'string',price:'Number'}
        });
    }).catch(err=>
        {
            console.log(err);
     res.status(500).json({
    error:err
     });
    });
}