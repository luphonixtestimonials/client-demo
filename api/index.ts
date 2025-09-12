
import express, { type Express, type Request, type Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware for Vercel
app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// API Routes
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "OK", message: "TechForward API is running" });
});

app.get("/api/services", (req: Request, res: Response) => {
  res.json([
    {
      id: 1,
      title: "AI & Analytics",
      description: "Advanced AI solutions and data analytics",
      icon: "brain"
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and migration services",
      icon: "cloud"
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and monitoring",
      icon: "shield"
    },
    {
      id: 4,
      title: "Digital Transformation",
      description: "End-to-end digital modernization services",
      icon: "transform"
    }
  ]);
});

// Export for Vercel
export default app;
