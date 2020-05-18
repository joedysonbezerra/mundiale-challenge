import request from 'supertest';
import app from '../src/App';

expect.extend({
  toBeStringOrNull(received) {
    return received === null || typeof received === 'string'
      ? {
          message: () => `expected ${received} to be boolean or null`,
          pass: true,
        }
      : {
          message: () => `expected ${received} to be boolean or null`,
          pass: false,
        };
  },
});

describe('Products', () => {
  it('Should return an list with ten products', async () => {
    const response = await request(app).post('/products').send({
      search: 'cadeado',
      limit: 10,
    });

    expect(response.body).toHaveLength(10);
    response.body.forEach((product) => {
      expect(product).toMatchObject({
        title: expect.any(String),
        link: expect.any(String),
        price: expect.any(Number),
        store: expect.toBeStringOrNull(),
        state: expect.toBeStringOrNull(),
      });
    });
  });

  it('Should return an list with two hundred products', async () => {
    const response = await request(app).post('/products').send({
      search: 'cadeado',
      limit: 200,
    });

    expect(response.body).toHaveLength(200);
    response.body.forEach((product) => {
      expect(product).toMatchObject({
        title: expect.any(String),
        link: expect.any(String),
        price: expect.any(Number),
        store: expect.toBeStringOrNull(),
        state: expect.toBeStringOrNull(),
      });
    });
  });
  it('Should return product not found if not exists', async () => {
    const response = await request(app).post('/products').send({
      search: 'joedysonbezerra12839029',
      limit: 1,
    });

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toEqual('product_not_found');
  });
});

describe('Validators', () => {
  test('Should return 400 Bad Request if no search is provided ', async () => {
    const response = await request(app).post('/products').send({
      limit: 1,
    });
    expect(response.statusCode).toBe(400);
  });

  test('Should return 400 Bad Request if no limit is provided ', async () => {
    const response = await request(app).post('/products').send({
      search: 'cadeado',
    });
    expect(response.statusCode).toBe(400);
  });
  test('Should return 400 Validation Fails when a string is entered at the limit ', async () => {
    const response = await request(app).post('/products').send({
      search: 'cadeado',
      limit: 'abc',
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toEqual('validation_fails');
  });
  test('Should return 400 Validation Fails the zero value is entered at the limit ', async () => {
    const response = await request(app).post('/products').send({
      search: 'cadeado',
      limit: 0,
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toEqual('validation_fails');
  });
});
