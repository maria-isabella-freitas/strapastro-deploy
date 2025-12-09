// src/util/get-github-auth.ts

import { CONFIG } from "../config";

export const getGithubAuth = () => `Bearer ${CONFIG.GITHUB.PAT}`;
