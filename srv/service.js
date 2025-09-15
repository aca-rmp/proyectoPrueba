const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {
    this.on('addStock', 'Products', async (req) => {
        const productID = req.params[0].ID;
        const quantityToAdd = req.data.quantity;

        if (quantityToAdd <= 0) {
            return req.error(400, 'La cantidad a añadir debe ser mayor que cero.');
        }

        const product = await SELECT.one.from('db.Products').where({ ID: productID });

        if (!product) {
            return req.error(404, `Producto con ID ${productID} no encontrado.`);
        }

        const newStock = product.stock + quantityToAdd;
        await UPDATE('db.Products').set({ stock: newStock }).where({ ID: productID });

        const updatedProduct = await SELECT.one.from('db.Products').where({ ID: productID });
        return updatedProduct;
    });
});