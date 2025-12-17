import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";

export async function action({ request, context }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const formData = await request.formData();
    const soundIdStr = formData.get("soundId");

    if (!soundIdStr) {
      return json({ error: "Invalid sound ID" }, { status: 400 });
    }

    const soundId = parseInt(soundIdStr.toString(), 10);

    if (isNaN(soundId)) {
      return json({ error: "Invalid sound ID format" }, { status: 400 });
    }

    // Check if Cloudflare context is available (it won't be in dev mode with vite:dev)
    if (!context?.cloudflare?.env?.SOUND_RANKINGS) {
      console.warn("KV namespace not available - vote not persisted");
      return json({ success: false, error: "KV namespace not available in development mode" }, { status: 503 });
    }

    const kv = context.cloudflare.env.SOUND_RANKINGS;
    const key = `vote:${soundId}`;

    // Get current vote count
    const currentVotes = await kv.get(key);
    const newVoteCount = currentVotes ? parseInt(currentVotes, 10) + 1 : 1;

    // Store updated vote count
    await kv.put(key, newVoteCount.toString());

    return json({ success: true, votes: newVoteCount });
  } catch (error) {
    console.error("Vote error:", error);
    return json({ error: "Failed to process vote" }, { status: 500 });
  }
}
