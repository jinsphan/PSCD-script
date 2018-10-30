/*
<option value="2" >Importwise</option>
<option value="36" >Bet-Game</option>
<option value="41" >Web game - bustabit.com</option>
template: [1, "08:00", 8, "17:00", "your job is here", "22/10/2017"],
*/

// TODAY
let data = [

];

// ALL


data.map(rp => {
    $.ajax({
        url: "http://pscd.pacificsoftdev.com/reports/add",
        method: "POST",
        data: {
            "report[project_id]": rp[0],
            "report[time_start]": rp[1],
            "report[work_time]": rp[2],
            "report[time_end]": rp[3],
            "report[job]": rp[4],
            "report[notes]": rp[5],
            "btn_submit": "Add"
        },
        success: data => {
            console.log(data);
        },
        error: er => {
            console.log(er)
        }
    })
})

// Backup data
let bk = [
[41, "08:00", 6, "15:00", "dev game play page", "30/10/2017"],	
[36, "15:00", 2, "17:00", "dev game play page", "30/10/2017"],
];
