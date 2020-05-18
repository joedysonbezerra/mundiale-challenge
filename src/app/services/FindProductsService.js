import fetchContent from '../../util/fetchContent';
import AppError from '../../errors/AppError';

class FindProductsService {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute({ limit, url }) {
    try {
      const $ = await fetchContent(url);
      const products = [];
      $('#searchResults li.article').each((index, element) => {
        if (index === limit) return false;
        const product = this.productsRepository.findOne($, element);
        products.push(product);
      });

      return products;
    } catch (error) {
      if (error.message === 'Request failed with status code 404') {
        throw new AppError('product_not_found', 404);
      }
      throw new Error(error);
    }
  }
}

export default FindProductsService;
