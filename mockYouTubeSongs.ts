export interface Song {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  videoUrl: string;
}

export const featuredSongs: Song[] = [
  {
    id: '1',
    title: 'Ethereal Soundscapes',
    artist: 'HYMN Production',
    thumbnail: 'https://pixabay.com/get/g9c132556537347b138d3a42fc4f93093e4dd5906fb0fc47530a6b340872beac1e664b52d1a5f2c1c35f2987ed09d3f43a1595759f4ab2ca739f95fc31353b726_1280.jpg',
    videoUrl: 'https://www.youtube.com/channel/UCIDyGZoop0B0WA9KU2jzSEQ/videos'
  },
  {
    id: '2',
    title: 'Midnight Sessions',
    artist: 'HYMN Production',
    thumbnail: 'https://pixabay.com/get/g90a8e1d56bca4302ac377532744aac1fc9f41f837a81e1f588050e3a74cc504128b21756713b3a09a1c542d8ede16ac70631f2ad4bcc23cd1a18edce35714dc0_1280.png',
    videoUrl: 'https://www.youtube.com/channel/UCIDyGZoop0B0WA9KU2jzSEQ/videos'
  },
  {
    id: '3',
    title: 'Psychedelic Dreams',
    artist: 'HYMN Production',
    thumbnail: 'https://pixabay.com/get/gc83e83cfe98be2906f0fd10dbfbba125ccdebb45ce71ec4c51dad2634e8e62bb668bcf46331963d5885e7c1c84eadbac286dd99b9f4bdb393711852b97fd9a14_1280.jpg',
    videoUrl: 'https://www.youtube.com/channel/UCIDyGZoop0B0WA9KU2jzSEQ/videos'
  }
];
