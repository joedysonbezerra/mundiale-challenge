import FindProductsService from './FindProductsService';

class NavigateThroughPaginationService {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute({ limit, url }) {
    const totalPages = Math.ceil(limit / 51);

    let promises = [];
    for (let i = 0; i <= totalPages; i += 1) {
      promises = [
        ...promises,
        new FindProductsService(this.productsRepository).execute({
          url: `${url}_Desde_${i * 51}`,
        }),
      ];
    }

    const products = await Promise.all(promises);

    return products
      .reduce((list, next) => list.concat(next), [])
      .slice(0, limit);
  }
}

export default NavigateThroughPaginationService;
