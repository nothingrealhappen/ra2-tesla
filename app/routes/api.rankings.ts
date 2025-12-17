import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { sounds } from "~/data/sounds";

export async function loader({ context }: LoaderFunctionArgs) {
  try {
    const kv = context.cloudflare.env.SOUND_RANKINGS;

    // Fetch votes for all sounds
    const votesPromises = sounds.map(async (sound) => {
      const key = `vote:${sound.id}`;
      const votes = await kv.get(key);
      return {
        soundId: sound.id,
        votes: votes ? parseInt(votes, 10) : 0,
      };
    });

    const allVotes = await Promise.all(votesPromises);

    // Sort by votes and get top 20
    const rankings = allVotes
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 20);

    return json({ rankings });
  } catch (error) {
    console.error("Rankings error:", error);
    return json({ error: "Failed to fetch rankings" }, { status: 500 });
  }
}
