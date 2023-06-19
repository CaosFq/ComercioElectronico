const { Router } = require('express');

const router = Router();

router.get('/api/v1', (req, res) => {
  res.json({
    status: 'success😁',
    message: 'ROUTE-GET',
  });
}); //pos es una ruta para crear un recurso
router.post('/api/v1', (req, res) => {
  res.json({
    status: 'success🙌',
    message: 'ROUTE-POST',
  });
});
router.patch('/api/v1', (req, res) => {
  res.json({
    status: 'success😃',
    message: 'ROUTE-PATCH',
  });
});
router.delete('/api/v1', (req, res) => {
  res.json({
    status: 'success😍',
    message: 'ROUTE-DELETE',
  });
});
module.exports = {
  productRouter: router,
};
