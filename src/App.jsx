import "./App.css";
import { faker as faker } from "@faker-js/faker";
import { faker as fakerTH } from "@faker-js/faker/locale/th";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState([]);

  function csvData() {
    const newEntries = [];
    const maxData = 100000; // ไม่เกิน 1 แสน
    // const sendDate = "202406131730";
    // const sender = "Syaco";
    const senders = [
      "Syaco", // ใช้งานได้
      "", // ใช้งานไม่ได้
    ];
    const sendDates = [
      "202406262359", // วันนี้ 23:59
      "202406261030", // วันนี้ 10:30
      "202406251030", // เมื่อวานนี้ 10:30
      "202406271030", // พรุ่งนี้ 10:30
    ];
    const listTel = [
      "0932945549", // (พี่เก่ง)
      "0894495044", // (พี่เก่งB)
      "0949589304", // (เอฟ)
      "0954134001", // (น้องเคนนี่)
      "0864455675", // (พี่แบงค์)
      "0998266076", // (พี่ลูกตาล)
      "0833047644", // (น้องกระปุก)
      "0961720903", // (น้องบอส)
      "0869056969", // (อ.ปูB)
      "0897736565", // (อ.โกร)
      "0820954329", // (มาย)
      "0863176544", // (อ.จ๊อบ)
      "0818718333", // (อ.จ๊อบB)
      "0810432880", // (บริษัท)
      "0959507822", // (มีน)
      "0909097331", // (พี่ต่าย)
      "0610147694", // (น้องปอ)
      "0952878880", // (พี่เคน)
      "0656543544", // (น้องก้อง)
      "0982674364", // (คุณหมิง)
      "0863551564", // (อ.คงณัฐ)
    ];

    for (let index = 0; index < maxData; index++) {
      for (let i = 0; i < listTel.length; i++) {
        const element = listTel[i];

        newEntries.push(
          `${element},${fakerTH.person.fullName()},
          ${faker.helpers.arrayElement(senders)},
          ${faker.helpers.arrayElement(sendDates)},`,
        );

        if (newEntries.length == maxData) break;
      }
      if (newEntries.length == maxData) break;
    }

    setCount((prevCount) => [...prevCount, ...newEntries]);

    console.log(`จำนวนข้อมูลทั้งหมด: ${newEntries.length} ข้อความ`);

    for (let ind = 0; ind < listTel.length; ind++) {
      const element = listTel[ind];

      console.log(
        `(${element}): ${
          newEntries.filter((v) => v.includes(element)).length
        } ข้อความ`,
      );
    }
  }

  useEffect(() => {
    csvData();
  }, []);

  return (
    <div className="App">
      <code>
        {count.map((v, i) => (
          <div key={i}>{v}</div>
        ))}
      </code>
    </div>
  );
}
