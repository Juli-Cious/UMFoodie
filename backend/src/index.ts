import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Enable CORS to allow the React frontend to communicate with this backend
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req: Request, res: Response) => {
    try {
      const { input } = req.body;
  
      if (!input) {
        return res.status(400).json({ error: 'Input is required' });
      }
  
      // Make a request to OpenAI API
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: input,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`, // Replace with your OpenAI API key
            'Content-Type': 'application/json',
          },
        }
      );
  
      const aiResponse = response.data.choices[0].text.trim();
      res.json({ aiResponse });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  