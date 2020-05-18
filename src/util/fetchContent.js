import axios from 'axios';
import cheerio from 'cheerio';

export default async function fetchContent(url) {
  const { data } = await axios.get(url);
  return cheerio.load(data);
}
