// import express from 'express';
// import axios from 'axios';

// const router = express.Router();
// const apiKey = process.env.NEWS_API_KEY;

// router.get('/barauni', async (req, res) => {
//   try {
//     const apiKey = process.env.NEWS_API_KEY;
//     const url = `https://newsapi.org/v2/everything?q=%22Indian%20Oil%22%20Barauni&language=en&apiKey=${apiKey}`;
//     const response = await axios.get(url);

//     const articles = response.data.articles.map(article => ({
//       title: article.title,
//       source: article.source.name,
//       date: article.publishedAt,
//       url: article.url,
//       description: article.description,
//       image: article.urlToImage,
//     }));

//     res.json(articles);
//   } catch (error) {
//     console.error('News API error:', error);
//     res.status(500).json({ error: 'Failed to fetch news' });
//   }
// });

// export default router;

// import express from 'express';
// const router = express.Router();

// router.get('/barauni', (req, res) => {
//   const dummyNews = [
//     {
//       title: 'New Expansion at IOCL Barauni',
//       description: 'A major expansion project has been announced...',
//       url: 'https://iocl.com/news/expansion-barauni',
//       image: 'https://iocl.com/images/barauni-news.jpg',
//       date: new Date(),
//       source: 'Indian Oil News'
//     },
//     {
//       title: 'Environmental Initiatives at Barauni Refinery',
//       description: 'IOCL Barauni has launched new eco-friendly measures...',
//       url: 'https://iocl.com/news/eco-barauni',
//       image: '',
//       date: new Date(),
//       source: 'Times of India'
//     }
//   ];

//   res.json(dummyNews); // Make sure this is an array!
// });

// export default router;


import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/gnews', async (req, res) => {
  const apiKey = 'e7575001ce5241e9a59b3e9019751fec';
  const query = 'Indian Oil Barauni OR IOCL Barauni';
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&token=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

export default router;
