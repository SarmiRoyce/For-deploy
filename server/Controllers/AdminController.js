app.put('/beautician/verify/:id', async (req, res) => {
    try {
      const beautician = await Beautician.findById(req.params.id);
      beautician.verified = true;
      await beautician.save();
      res.json(beautician);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  



  app.get('/payments', async (req, res) => {
    try {
      const payments = await Payment.find();
      res.json(payments);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  