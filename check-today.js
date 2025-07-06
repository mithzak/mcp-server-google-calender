import { getMyCalendarDataByDate } from "./server.js";

const today = new Date();
today.setUTCHours(0, 0, 0, 0);
const dateStr = today.toISOString().slice(0, 10);

getMyCalendarDataByDate(dateStr).then((result) => {
       if (result.meetings && result.meetings.length > 0) {

        result.meetings.forEach((meeting) => {console.log("\n"); console.log(meeting)});
    } else {
        console.log("\n");
        console.log("You have no meetings today.");
    }
}).catch((err) => {
    console.error("Error fetching meetings:", err);
}); 