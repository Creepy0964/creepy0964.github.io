import './zalupa.css';

import banan from './img/6b12eb1fc259690db7b8e60a14da4616.jpg';
import shailushai from './img/shailushai.jpeg';
import github from './img/github.png';
import tg from './img/tg.png';
import tiktok from './img/tiktok.png';
import twitch from './img/twitch.png';

function Index() {
    return(
    <main>
      <div className="topnav">
        <a className="active" href="/">Главная</a>
        <a href="https://github.com/creepy0964">GitHub</a>
        <a href="https://yyyyyyy.info/">Пожертвовать</a>
      </div>

      <h1 className="title">
        Creepy0964
      </h1>

      <div className="main">
        <p>
          музыкант, кодер, владелец тгк <a className="tpn" href="https://t.me/typology_nasralishe">"типологическое насралище"</a> и просто дурачок :p
        </p>
        <a href="https://nohello.net/ru">
          <img src={banan} alt="ТОП 10 КРУТЫХ БАНАНОВ"></img>
        </a>
      </div>

      <div className="main">
        <p>кстати, вы знали, что виктории относятся к чертам современного общества?</p>
        <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%B8%D1%82%D0%BB%D0%B5%D1%80,_%D0%90%D0%B4%D0%BE%D0%BB%D1%8C%D1%84"><img src={shailushai} alt="сладкий пупсик"></img></a>
      </div>

      <div className="main">
        <p>ладно, кроме шуток, вот ссылочки на мои соц. сети</p>
        <center>
          <a className="img" href="https://media.tenor.com/iohRIQ_1dHAAAAAM/youve-been-pranked-chris.gif"><img src={tiktok} alt=""></img></a>
          <a className="img" href="https://t.me/creepy0964"><img src={tg} alt=""></img></a>
          <a className="img" href="https://github.com/creepy0964"><img src={github} alt=""></img></a>
          <a className="img" href="https://media.tenor.com/iohRIQ_1dHAAAAAM/youve-been-pranked-chris.gif"><img src={twitch} alt=""></img></a>
        </center>
      </div>

      <div className="main">
        <p>мои проекты</p>
        <ul>
          <center><a href='./music.js'><button>моя музыка (в процессе переноса под реакт)</button></a></center>
          <center><a href='https://t.me/typology_nasralishe'><button>типологическое насралище - типологии для маленьких и тупых</button></a></center>
          <center><a href='https://creepy0964.github.io/psychosophy'><button>сайт для знатоков психософии</button></a></center>
          <center><a href='https://github.com/creepy0964/ticketbot'><button>TicketBot - бот ТГ для фильтрации жалоб и модерации беседы (в разработке)</button></a></center>
          <center><a href='https://github.com/creepy0964/minejs'><button disabled>MineJS - будущий проект лаунчера Minecraft на JavaScript</button></a></center>
        </ul>
      </div>

      <h2>(c) LIFE IS ROBLOX, 2178 г. Мы не знаем наши права :p</h2>
    </main>
    );
}

export default Index;