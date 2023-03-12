module.exports = {
  async get(req,res,prisma){
    const body = req.body;
    if(body.id){
      try{
        const book = await prisma.MangaData.findUnique({
          where: {
            id: body.id,
          },
        })
        res.status(200).send(book)
      }
      catch(error){
        res.status(400).send('Bad id')
      }
    }else if(body.anilist){
      try{
        const book = await prisma.MangaData.findUnique({
          where: {
            anilist: `${body.anilist}`,
          },
        })
        res.status(200).send(book)
      }
      catch(error){
        res.status(400).send('Bad anilist')
      }
    }else{
      res.status(400).send('No ID or AnilistID')
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