import createLog from '../../util/createLog';

export default (request, response, next) => {
  console.time('Request');

  const log = createLog(
    `[${request.method.toUpperCase()}]: Url - ${request.url} | User -  IP:${
      request.ip
    } | body - ${JSON.stringify(request.body)}\n`
  );
  console.info(log);

  next();
  console.timeEnd('Request');
};
