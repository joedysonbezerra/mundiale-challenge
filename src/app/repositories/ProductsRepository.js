import Product from '../models/Product';

class ProductRepository {
  findOne($, element) {
    const link = $(element).find('a').attr('href');
    const title = $(element).find('.item__title').text().trim();
    const fraction = $(element).find('.price__fraction').text().trim();
    const decimals = $(element).find('.price__decimals').text().trim();
    const store =
      $(element)
        .find('a .item__brand-title-tos')
        .text()
        .replace('por ', '')
        .trim() || null;
    const state = $(element).find('.item__condition').text().trim() || null;
    const price = Number.parseFloat(`${fraction}.${decimals}`);

    return new Product({
      title,
      link,
      price,
      store,
      state,
    });
  }
}

export default ProductRepository;
