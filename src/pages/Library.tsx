import axios from "axios";
import SpotifyData from "../utils/spotify_data.json";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import count from "count-array-values";
import isoWeek from "dayjs/plugin/isoWeek";

export default function Library() {
  interface SpotifyPlaybackEvent {
    ts: null | string;
    username: null | string;
    platform: null | string;
    ms_played: null | number;
    conn_country: null | string;
    ip_addr_decrypted: null | string;
    user_agent_decrypted: null | string;
    master_metadata_track_name: null | string;
    master_metadata_album_artist_name: string;
    master_metadata_album_album_name: null | string;
    spotify_track_uri: null | string;
    episode_name: null | string;
    episode_show_name: null | string;
    spotify_episode_uri: null | string;
    reason_start: null | string;
    reason_end: null | string;
    shuffle: null | boolean;
    skipped: null | boolean;
    offline: null | boolean;
    offline_timestamp: null | number;
    incognito_mode: null | boolean;
  }
  const [data, setData] = useState<SpotifyPlaybackEvent[]>(SpotifyData);

  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
    const names: string[] = [];
    data.forEach((element) => {
      console.log(element.master_metadata_album_artist_name);
      names.push(element.master_metadata_album_artist_name);
    });
    setArtists(names);
  }, []);

  console.log(artists);

  dayjs.extend(isoWeek);

  const ranking = count(artists, "artistName", "playCount");

  return (
    <div className="min-h-screen p-10 bg-neutral-950">
      <div className="flex flex-col gap-6">
        {ranking.map((e, i) => (
          <div className="flex items-center gap-12 p-6 text-4xl text-white border border-purple-500">
            <span className="font-bold text-purple-500">{i + 1}º - </span>
            <span className="">{e.artistName}</span>
            <span className="p-2 font-semibold text-black bg-purple-400 rounded-xl">
              {e.playCount} times
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
