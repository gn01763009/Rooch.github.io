import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import "animate.css";

const ListData = [
  {
    company: "Gogolook",
    icon: "https://media.cakeresume.com/image/upload/s--Y99hvpQ5--/c_pad,fl_png8,h_200,w_200/v1618254473/gi3vnzovbkfiqffe6fu7.png",
    title: "Sr. Backend Engineer (Roo)",
    desc: "Your Missions \n1. Implement and maintain the backend infrastructure of Gogolook \n2. Build and maintain various microservices, and work to improve their performance...",
    location: "San Francisco, US",
    link: "https://gogolook.com/",
    interviews: ["薪資", "技術", "行為"],
    click: false,
  },
  {
    company: "VoiceTube 紅點子科技股份有限公司",
    icon: "https://media.cakeresume.com/image/upload/s--LBoLhAMM--/c_pad,fl_png8,h_200,w_200/v1581571069/pnolcky5g0osh1jbc0ey.png",
    title: "後端工程師 (Python) Backend Engineer",
    desc: "Responsibilities】 \n1. Build backend services and APIs to create scalable engineering systems \n2. Identify, evaluate & define improvements to the...",
    location: "Taipei, Taiwan",
    link: "https://www.voicetube.com/",
    interviews: ["薪資", "技術"],
    click: false,
  },
  {
    company: "KKday",
    icon: "https://media.cakeresume.com/image/upload/s--qb9ge49h--/c_pad,fl_png8,h_200,w_200/v1666342333/cmu3q58jezs7zkvpeprv.png",
    title: "後端工程師 Backend Engineer (B2C) [RD]",
    desc: "【關於KKday】 KKday正在加速全世界旅遊體驗的蛻變。 身為亞洲最大的旅遊體驗平台，KKday致力於透過數位化整合出一站式平台以滿足旅遊的所有需求，目前在全球超過92個...",
    location: "Taipei, Taiwan",
    link: "https://www.kkday.com/",
    interviews: ["技術"],
    click: false,
  },
  {
    company: "ShopBack 回饋網股份有限公司",
    icon: "https://media.cakeresume.com/image/upload/s--RiMxTzWd--/c_pad,fl_png8,h_200,w_200/v1657599645/hma3pimzrdw1b4eq527q.png",
    title: "Staff Software Engineer - Backend",
    desc: "Responsibilities Be the project owner, design, develop, implement, and maintain both new and existing backend systems with tech depth...",
    location: "Taipei, Taiwan",
    link: "https://www.shopback.com/",
    interviews: ["薪資", "技術", "行為"],
    click: false,
  },
  {
    company: "雲訊科技有限公司",
    icon: "https://media.cakeresume.com/image/upload/s--8vBdnKmG--/c_pad,fl_png8,h_200,w_200/v1677316346/nrbqxnfira6ujckri5nc.png",
    title: "Backend 後端工程師",
    desc: "◆ 與業務和設計團隊一起實施新功能並重新開發現有組件，以改善用戶體驗 \n◆ 當客戶或內部測試團隊提出問題時，解決新的和現有的錯誤積壓 \n◆ 不斷優化現有代碼庫，以獲得最佳性...",
    location: "Taipei, Taiwan",
    link: "https://www.rainforest.com.tw/",
    interviews: ["薪資", "行為"],
    click: false,
  },
];

const Lists = () => {
  const [state, setState] = useState(ListData.map((list) => list.click));
  const navigate = useNavigate();

  const handleClick = (idx) => {
    setState((prevState) => {
      const newArr = [...prevState];
      newArr[idx] = !newArr[idx];
      return newArr;
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start items-center gap-3 mx-auto">
        <input
          type="text"
          placeholder="Type your job title"
          className="w-80 p-4 border rounded-full"
        />
        <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-300">
          submit
        </button>
      </div>
      <div className="w-full p-8 pt-0 flex flex-col gap-5">
        {ListData.map((list, idx) => {
          return (
            <>
              <div
                style={{ animationDelay: `${idx * 0.2}s` }}
                onClick={() => handleClick(idx)}
                className="border flex gap-5 p-3 px-8 rounded-2xl hover:bg-gray-100 cursor-pointer animate__animated animate__fadeInUp"
                key={idx}
              >
                <img
                  className="w-12 h-12 rounded-full my-auto"
                  alt={list.company}
                  src={list.icon}
                />
                <div className="flex flex-col gap-2 flex-1 pl-2">
                  <h2 className="text-lg font-bold">{list.title}</h2>
                  <div className="flex gap-1">
                    <FontAwesomeIcon className="w-4 h-4" icon={faLocationDot} />
                    <p className="text-xs">{list.location}</p>
                  </div>
                  <span className="text-sm whitespace-break-spaces">
                    {list.desc}
                  </span>
                </div>
                <FontAwesomeIcon
                  className="w-5 h-5 my-auto"
                  icon={faAngleDown}
                />
              </div>
              {state[idx] && (
                <div className="flex gap-5 p-3 px-8 justify-center items-center w-full">
                  {list.interviews.map((interview, idx) => {
                    return (
                      <button
                        className="px-8 py-3 bg-gray-100 rounded-full hover:bg-gray-300 cursor-pointer text-lg"
                        key={idx}
                        onClick={() => {navigate('/loading');}}
                      >
                        {interview}
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Lists;
