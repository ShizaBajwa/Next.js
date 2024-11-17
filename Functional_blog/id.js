export default async function handler(req, res) {
    const { id } = req.query;
    const session = await getSession({ req });
  
    if (!session) {
      return res.status(401).json({ message: "Not authorized" });
    }
  
    if (req.method === "PUT") {
      const { title, content } = req.body;
      const post = await prisma.post.update({
        where: { id: parseInt(id) },
        data: { title, content },
      });
      return res.status(200).json(post);
    }
  
    if (req.method === "DELETE") {
      await prisma.post.delete({
        where: { id: parseInt(id) },
      });
      return res.status(204).end();
    }
  }
  