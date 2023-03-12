module.exports = {
  async get(req,res,prisma){
    const body = req.body;
    const login = req.get('X-technology-login-true');
    if(body.id){
      try{
        let user = await prisma.UserData.findUnique({
          where: {
            id: body.id,
          },
        })
        if(login == "BghJ"){
          res.status(200).send(user)
        }else{
          user.password = "Can't touch this" 
          res.status(200).send(user)
        }
        
      }
      catch(error){
        console.error(error)
        res.status(400).send('Bad id')
      }
    }else if(body.name){
      try{
        const user = await prisma.MangaData.findMany({
          where: {
            name: `${body.name}`,
          },
        })
        res.status(200).send(user)
      }
      catch(error){
        res.status(400).send('No user with such name')
      }
    }else{
      res.status(400).send('No ID or Name of user')
    }
  },
  async post(req,res,prisma){
    res.status(503).send('endpoint not implemented')
  },
  async put(req,res,prisma){
    res.status(503).send('endpoint not implemented')
  },
  async delete(req,res,prisma){
    res.status(503).send('endpoint not implemented')
  }
}