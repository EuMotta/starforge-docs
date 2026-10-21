import { NextResponse } from 'next/server';

import pkg from '../../../package.json';

const PROJECT_NAME = 'starforge';

export const dynamic = 'force-static';

const DEPLOYED_AT = new Date().toISOString();

const HEALTH_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': 'no-cache'
} as const;

interface HealthPayload {
  name: string;
  version: string;
  deployedAt: string;
  status: 'ok';
}

function buildHealthPayload(): HealthPayload {
  return {
    name: PROJECT_NAME,
    version: pkg.version,
    deployedAt: DEPLOYED_AT,
    status: 'ok'
  };
}

export function GET() {
  return NextResponse.json(buildHealthPayload(), { headers: HEALTH_HEADERS });
}
