'use server';

import { cookies } from 'next/headers';

export async function loginAdmin(password: string) {
  // In a real scenario, this should be an environment variable.
  // We use a fallback just in case the env var isn't set yet during development.
  const adminPassword = process.env.ADMIN_PASSWORD || 'vanguard2026';

  if (password === adminPassword) {
    cookies().set('avidz_admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });
    return { success: true };
  }

  return { success: false, error: 'Invalid authentication crystal' };
}

export async function logoutAdmin() {
  cookies().delete('avidz_admin_session');
  return { success: true };
}
