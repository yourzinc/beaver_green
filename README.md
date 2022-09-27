# 혀가 아물기 전에
LEAP 소그룹 공모전 [비버그린]

BEAMVERTISING EXHIBITION  
관객 참여형 빔버타이징 전시

2011.11.25 18:30 - 21:00  
이화여자대학교 조형예술관 A동과 C동 사이

Instagram : @beaver__green


## Features

- 벽에 상영되고 있는 영상과 그 앞에 비치된 노트북이 있다.
- 해당 영상을 시청한 후, 노트북 화면의 질문을 읽고 답을 선택한다.
- 선택하는 답에 따라, 상영되는 영상이 바뀔 수 있다.


## Preview
<img src="https://user-images.githubusercontent.com/77188666/192484787-fe673966-beeb-4e18-9d10-9071e3a2b5d4.gif" height="500px" width="800px">


## Tech

이 프로젝트의 기능은 웹 개발로 구현하였다.

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 
- [socket.io] - Bidirectional and low-latency communication for every platform


## Installation

저작권의 문제로 상영되는 영상은 이 repository 에 올리지 않았다.
따라서 별도로 다음 이름의 파일의 준비가 필요하다.

`public/past.MP4`, `public/present.MP4`, `public/future.MP4`

This requires [Node.js](https://nodejs.org/) v10+ to run.

```sh
npm i
node app
```

1. 노트북 화면에 보이는 질문
```sh
127.0.0.1:3000 or localhost:3000
```

2. 벽에 상영되는 영상
```sh
127.0.0.1:3000/video or localhost:3000/video
```

## License

MIT

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [socket.io]: <https://socket.io>
