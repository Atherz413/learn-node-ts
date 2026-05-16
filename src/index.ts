import { add, multiply } from "./math";
import dayjs from "dayjs";

console.log(add(3, 7));
console.log(multiply(4, 5));

// dayjs — format วันที่
const now = dayjs();
console.log(now.format("YYYY-MM-DD HH:mm:ss"));

// บวกวัน
const nextWeek = dayjs().add(7, "day");
console.log(nextWeek.format("YYYY-MM-DD"));

// จำลอง database query — ใช้เวลา 1 วินาที
const fetchLead = (id: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Lead #${id}: สมหญิง ใจดี`);
    }, 1000);
  });
};

// async function — รอผลก่อนค่อยทำต่อ
const main = async () => {
  console.log("กำลังดึงข้อมูล...");
  const lead = await fetchLead(42);
  console.log(lead);
  console.log("เสร็จแล้ว");
};

main();