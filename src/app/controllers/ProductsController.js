import ProductsRepository from '../repositories/ProductsRepository';
import FindProductsService from '../services/FindProductsService';
import NavigateThroughPaginationService from '../services/NavigateThroughPaginationService';

class ProductsController {
  constructor() {
    this.productsRepository = new ProductsRepository();
    this.index = this.index.bind(this);
  }

  async index(request, response) {
    const { search, limit } = request.body;

    const url = `https://lista.mercadolivre.com.br/${search}`;

    let products = [];

    if (limit > 51) {
      products = await new NavigateThroughPaginationService(
        this.productsRepository
      ).execute({ limit, url });
    } else {
      products = await new FindProductsService(
        this.productsRepository
      ).execute({ limit, url });
    }

    return response.json(products);
  }
}

export default ProductsController;
