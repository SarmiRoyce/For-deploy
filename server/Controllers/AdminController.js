// app.put('/beautician/verify/:id', async (req, res) => {
//     try {
//       const beautician = await Beautician.findById(req.params.id);
//       beautician.verified = true;
//       await beautician.save();
//       res.json(beautician);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   });
  



//   app.get('/payments', async (req, res) => {
//     try {
//       const payments = await Payment.find();
//       res.json(payments);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   });
  





app.put('/beautician/verify/:id', async (req, res) => {
  const { id } = req.params;
  const { verified } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { verified }, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error verifying user', error });
  }
});



app.post('/beautician/create', async (req, res) => {
  const { name, email, role, verified } = req.body;
  try {
    const newUser = new User({ name, email, role, verified });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});


