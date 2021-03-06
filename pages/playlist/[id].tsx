import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

import Masthead from "../../components/Masthead";
import SongsTable from "../../components/SongsTable";

const getBgColor = id => {
  const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'gray',
    'teal',
    'yellow',
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
}

const Playlist = ({ playlist }) => {
  const color = getBgColor(playlist.id);

  return (
    <Masthead
      color={color}
      roundImage={false}
      title={playlist.name}
      subtitle="Playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongsTable songs={playlist.songs} />
    </Masthead>
  );
}

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN);

  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  }
};

export default Playlist;
