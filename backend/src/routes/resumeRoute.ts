import express from 'express'
import { resumeController } from '../controllers/resumeController';

const app = express();
 
const router = express.Router();

router.post('/resume-build',resumeController)