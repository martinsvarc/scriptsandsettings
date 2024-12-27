import { createClient } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const getDbClient = async () => {
  const client = createClient();
  await client.connect();
  return client;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const teamId = searchParams.get('teamId');
  
  // If no teamId provided, return default true
  if (!teamId) {
    return NextResponse.json({ call_extend_allowed: true });
  }
  
  try {
    const client = await getDbClient();
    const { rows } = await client.query(
      'SELECT call_extend_allowed FROM performance_goals WHERE team_id = $1 ORDER BY created_at DESC LIMIT 1',
      [teamId]
    );
    await client.end();
    
    // Return true if no rows found, otherwise return the stored value
    return NextResponse.json({ 
      call_extend_allowed: rows.length === 0 ? true : rows[0].call_extend_allowed 
    });
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: 'Failed to load call extend status' }, { status: 500 });
  }
}
