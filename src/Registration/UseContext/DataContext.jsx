import { createContext, useEffect, useState } from "react";
// import { useState } from "react";
import { toast } from "react-toastify";
import { data, storage } from "../../Backend/Firebase";
import { collection, addDoc, query, onSnapshot, QuerySnapshot, getDoc, getDocs, doc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import { ref,  uploadBytesResumable, getDownloadURL, getStorage, deleteObject, uploadBytes } from "firebase/storage";




const DataContext = createContext ({});


export const DataProvider = ({children}) =>{
    const [loading, setLoading]= useState(false)
    const [isAuth, setIsAuth]= useState(false)

    const [product, setProduct] = useState({
        name:'',
        category:'',
        price: '',
        description:'',
        images: []
    })
    const [selected, setSelected] = useState([])
    const [images, setImages] = useState([])
    const [newImages, setNewImages] = useState([])

    const [error, setError] = useState(null)

    const addProduct = async () =>{
        if(!product.name|| !product.category|| !product.price|| !product.description|| !images) return toast.error("Please Add Details")
            setLoading(true)
            try{
                const colRef = collection(data, 'product')
                const imageUrls = await Promise.all(
                  Array.from(images).map(async (image)=>{
                    const storageRef = ref(storage, `images/${image.name}`)
                    await uploadBytesResumable(storageRef, image)
                    return getDownloadURL(storageRef)
                  })
                )
                // query(colRef)
                await addDoc(colRef, {
                  name: product.name,
                  category: product.category,
                  price: product.price,
                  description: product.description,
                  images: imageUrls
              })
                // console.log(setproduct(product))
                 setLoading(false)
                 setProduct("")
                window.location.href ='/admin/product'
                getData()
                toast.success("Product Added Successfully")
    
              }catch(error){
                console.log('Error')
                setLoading(false)
              }
    }


    const [products, setProducts] = useState([])

    const colRef = collection(data, 'product')

      const getData = async()=>{
        setError(null)
        setLoading(true)
        try {
          const db =  query(colRef)
          const querySnapShot = await getDocs(db)
          const main = querySnapShot.docs.map((doc)=>({
            id:doc.id, ...doc.data()
          }))
          
          
           setProducts(main)
           setLoading(false)
           setError(null)
           
      }catch(error){
          console.log(error)
          setError("An Error Occured Please Reload")
          setLoading(false)
      }

       }

    useEffect(()=>{
       
       getData()
      
      //  getDoc(colRef).then((querySnapShot)=>{
      //   console.log(querySnapShot.docs.map((doc)=>({id:doc.id, ...doc.data()})))
      //  }).catch((error)=> console.log(error))
    },[products.id])

    const handleImageChanges = (e)=>{
        setNewImages( e.target.files)
      }

      const editProduct = (item)=>{
        setProduct(item)
      }


      const updateProduct  = async()=>{
        // if(!selected.name|| !selected.category|| !selected.price|| !product.description) return toast.error("Please Add Details")
          setLoading(true)
        setError(false)
          try{
              //   await Promise.all(product.images.map(async (image) => {
              //     const imageRef = ref(getStorage(), image)
              //     await deleteObject(imageRef)
              //   }));
              

              // // const colRef = collection(data, 'product')
              //   const imageUrls = await Promise.all(
              //     Array.from(newImages).forEach(async (image)=>{
              //       const storageRef = ref(storage, `images/${image.name}`)
              //       await uploadBytesResumable(storageRef, image)
              //       return getDownloadURL(storageRef)
              //     })
              //   )

              // if(product.images){
              //   await Promise.all(product.images.forEach(async (image) => {
              //     if(newImages.includes(image)){
              //       const imageRef = ref(getStorage(), image)
              //       await deleteObject(imageRef)
              //     }
              //   }))
              // }

                //   await Promise.all(product.images.map(async (image) => {
                //   const imageRef = ref(getStorage(), image)
                //   await deleteObject(imageRef)
                // }));
                    await deleteExistingImages(product.images)
                // product.images.map(async (image) => {
                //     const imageRef = ref(storage, image)
                //     await deleteObject(imageRef)
                //   })
                

                const updatedImages = await upLoadNewImages(newImages)
                  //  const imageUrls = await Promise.all(
                  //   const updatedImages = []
                  //   Array.from(newImages).map(async (image)=>{
                  //   const storageRef = ref(storage, `images/${image.name}`)
                  //   const snap = await uploadBytesResumable(storageRef, image)
                  //    const imageUrls = await getDownloadURL(storageRef)
                  //    updatedImages.push(imageUrls)
                  //   //  console.log(updatedImages)
                  
                  // })


                  const upProduct= {
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    description: product.description,
                    images: updatedImages
                }
              
                // const newImageRef = ref(storage, `newImages/${newImages.name}`)
                // const snap = await uploadBytes(newImageRef, newImages)
                // const newImageUrl = await getDownloadURL(newImageRef)
              

                // setProduct({...selected, images:imageUrls})
                // query(colRef)

               await updateProductDocument(product.id, upProduct)
               
              //  await updateDoc(doc(data, 'product', product.id),upProduct)
              
               setLoading(false)
               setError(false)
              window.location.href ='/admin/product'
              getData()
              toast.success("Product Added Successfully")

          }catch(error){
            setLoading(false)
            setError(true)
          }
         
      }

        const deleteExistingImages = async(images)=>{
          await Promise.all(
            images.map(async (image) => {
              const imageRef = ref(storage, image)
              await deleteObject(imageRef)
            })
          )
        }

        const upLoadNewImages = async (images)=>{
          const updatedImages = []
          await Promise.all(Array.from(images).map(async (image)=>{
          const storageRef = ref(storage, `images/${image.name}`)
          const snap = await uploadBytesResumable(storageRef, image)
           const imageUrls = await getDownloadURL(storageRef)
           updatedImages.push(imageUrls)
          //  console.log(updatedImages)
        
        }))
            return updatedImages
        }

        const updateProductDocument = async(productid, beta) =>{
          await updateDoc(doc(data, 'product', productid),beta)
        }

        

      
      const handleDelete = async(id)=>{
        setLoading(true)
        try{
            await deleteDoc(doc(data, 'product', id))
           const product = products.find((product)=> (product.id) === id)
           const images = product.images
           const storage = getStorage()
           await Promise.all(
            images.map(async(image)=>{
              const imageRef = ref(storage, image)
              await deleteObject(imageRef)
            })
           )
            setLoading(false)
            setError(false)
            window.location.reload()
            toast.success("Product Deleted Successfully")

        }catch(error){
          setLoading(false)
          setError(true)
        }
      }





        // Blog Section

      const [blog, setBlog] = useState({
        title:'',
        subtitle: '',
        description:''
    })
    const [blog_images, setBlog_Images] = useState([])

    const addBlog = async () =>{
        if(!blog.title|| !blog.subtitle|| !blog.description|| !blog_images) return toast.error("Please Add Details")
            setLoading(true)
            try{
              const colRef = collection(data, 'blog')
              const imageUrls = await Promise.all(
                Array.from(blog_images).map(async (image)=>{
                  const storageRef = ref(storage, `blog_images/${image.name}`)
                  await uploadBytesResumable(storageRef, image)
                  return getDownloadURL(storageRef)
                })
              )
              // query(colRef)
              await addDoc(colRef, {
                title: blog.title,
                subtitle: blog.subtitle,
                description: blog.description,
                images: imageUrls
            })
                
                 setLoading(false)
                 setBlog("")
                 toast.success("Blog Added Successfully")
                window.location.href ='/admin/allblogs'
                getBlog()
    
              }catch(error){
                console.log('Error')
                setLoading(false)
              }
    }



    const [blogs, setBlogs] = useState([])

    const blogRef = collection(data, 'blog')

      const getBlog = async()=>{
        setError(null)
        setLoading(true)
        try {
          const db =  query(blogRef)
          const querySnapShot = await getDocs(db)
          const main = querySnapShot.docs.map((doc)=>({
            id:doc.id, ...doc.data()
          }))
          
          
           setBlogs(main)
           setLoading(false)
           setError(null)
          //  console.log([...blogs, ...main])
      }catch(error){
          console.log(error)
          setError("An Error Occured Please Reload")
          setLoading(false)
      }

       }

    useEffect(()=>{
       
       getBlog()
      
    },[blogs.id])


    const handleBlogImageChanges = (e)=>{
      setBlog_Images( e.target.files)
      }


      const editBlog = (item)=>{
        setBlog(item)
      }

      // for the update page
      const [newBlogImages, setNewBlogImages] = useState([])


        // for the update page
      const handleNewBlogImages = (e)=>{
         setNewBlogImages(e.target.files)
      }

          // Update Function
      const updateBlog  = async()=>{
       setLoading(true)
        setError(false)
          try{
              
                    await deleteExistingBlogImages(blog.images)
                

                const updatedImages = await upLoadNewBlogImages(newBlogImages)
                


                  const upProduct= {
                    title: blog.title,
                    subtitle: blog.subtitle,
                    description: blog.description,
                    images: updatedImages
                }
              

               await updateBlogDocument(blog.id, upProduct)

              
               setLoading(false)
               setError(false)
              
              window.location.href ='/admin/allblogs'
              getBlog()
              toast.success("Blog Added Successfully")

          }catch(error){
            setLoading(false)
            setError(true)
          }
         
      }

        const deleteExistingBlogImages = async(images)=>{
          await Promise.all(
            images.map(async (image) => {
              const imageRef = ref(storage, image)
              await deleteObject(imageRef)
            })
          )
        }

        const upLoadNewBlogImages = async (images)=>{
          const updatedImages = []
          await Promise.all(Array.from(images).map(async (image)=>{
          const storageRef = ref(storage, `blog_images/${image.name}`)
          const snap = await uploadBytesResumable(storageRef, image)
           const imageUrls = await getDownloadURL(storageRef)
           updatedImages.push(imageUrls)
          //  console.log(updatedImages)
        
        }))
            return updatedImages
        }

        const updateBlogDocument = async(blogid, beta) =>{
          await updateDoc(doc(data, 'blog', blogid),beta)
        }

        

      
      const handleDeleteBlog = async(id)=>{
        setLoading(true)
        try{
            await deleteDoc(doc(data, 'blog', id))
           const blog = blogs.find((blog)=> (blog.id) === id)
           const images = blog.images
           const storage = getStorage()
           await Promise.all(
            images.map(async(image)=>{
              const imageRef = ref(storage, image)
              await deleteObject(imageRef)
            })
           )
            setLoading(false)
            setError(false)
            window.location.reload()
            toast.success("Blog Deleted Successfully")

        }catch(error){
          setLoading(false)
          setError(true)
        }
      }


      // Get User
      const [user, setUser] = useState([]);

  // const getUserData = async () => {
  //   setLoading(true)
  //   try {
      
  //     const db =  query(colRef)
  //     const usersArray = [];
  //     result.forEach((doc) => {
  //       usersArray.push(doc.data());
  //       setLoading(false)
  //     });
  //     setUser(usersArray);
  //     console.log(usersArray)
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  // }

  const getUserData = async()=>{
    setError(null)
    setLoading(true)
    try {
    const resultref = await getDocs(collection(data, "user"))
      const db =  query(resultref)
      const querySnapShot = await getDocs(db)
      const main = querySnapShot.docs.map((doc)=>({
        id:doc.id, ...doc.data()
      }))
      
      
       setUser(main)
       setLoading(false)
       setError(null)
       
  }catch(error){
      console.log(error)
      setError("An Error Occured Please Reload")
      setLoading(false)
  }

   }

   const [order, setOrder] = useState([]);
  const getOrderData = async()=>{
    setError(null)
    setLoading(true)
    try {
    const resultref = await getDocs(collection(data, "orders"))
      const db =  query(resultref)
      const querySnapShot = await getDocs(db)
      const main = querySnapShot.docs.map((doc)=>({
        id:doc.id, ...doc.data()
      }))
      
      
       setOrder(main)
       setLoading(false)
       setError(null)
       
  }catch(error){
      console.log(error)
      setError("An Error Occured Please Reload")
      setLoading(false)
  }

   }

   
  useEffect(()=>{
    getUserData()
    getOrderData()
  }, [])





  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

 
   
   
 return (
    <>
     <DataContext.Provider value= {{
        loading, setLoading, isAuth, setIsAuth, addProduct, updateProduct, editProduct, selected, setSelected, handleDelete, product, setProduct, images, setImages, handleImageChanges, products, error, blogs, blog, setBlog, handleBlogImageChanges, blog_images, addBlog, handleNewBlogImages, updateBlog, editBlog, handleDeleteBlog, setBlog_Images, user, order, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice
    }}>
        {children}

    </DataContext.Provider>
    </>
   
    
 )
} 

export default DataContext



  