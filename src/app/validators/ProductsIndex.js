import * as Yup from 'yup';
import AppError from '../../errors/AppError';

export default async (request, response, next) => {
  try {
    const schema = Yup.object().shape({
      search: Yup.string().required(),
      limit: Yup.number().min(1).required(),
    });
    await schema.validate(request.body, { abortEarly: false });
    return next();
  } catch (error) {
    throw new AppError('validation_fails', 400, error.inner);
  }
};
