import App from './App';

const port = process.env.PORT || 3000;

App.listen(port, () => {
  console.log(`🚀  Server is running ${port}`);
});
