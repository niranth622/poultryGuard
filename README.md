## Deployment

1. Create Supabase project → Copy URL & Anon Key to .env.local
2. Run migrations / seed via API route or Supabase SQL editor
3. `npm run build`
4. Deploy to Vercel (connect GitHub repo)
5. Add environment variables in Vercel dashboard

For OTP: Enable Email OTP in Supabase Auth settings. Tamil support via simple i18n state.

Mock mode works without Supabase for hackathon demo.
