function updateProgress() {
    fetch('progress.json')
    .then(response => response.json())
    .then(data => {
        let enemiesMax = data.enemiesMax
        let enemiesDone = data.enemiesDone
        let bossesMax = data.bossesMax
        let bossesDone = data.bossesDone
        let itemsMax = data.itemsMax
        let itemsDone = data.itemsDone
        let gameplay = data.gameplay
        let overworldDone = data.overworld
        let darkworldDone = data.darkworld
        let dungeonsDone = data.dungeons
        let bonusDone = data.bonus
        let totalDone = (enemiesDone + bossesDone + itemsDone + gameplay*10 + overworldDone + darkworldDone + dungeonsDone + bonusDone)/(enemiesMax + bossesMax + itemsMax + 1400) * 100

    let enemiesProcent = Math.round((enemiesDone/enemiesMax)*100)
    let bossesProcent = Math.round((bossesDone/bossesMax)*100)
    let itemsProcent = Math.round((itemsDone/itemsMax)*100)

    document.getElementById("progEnemies").innerHTML = enemiesDone+" of "+enemiesMax
    document.getElementById("barbarEnemies").style.width = enemiesProcent*3+"px"
    document.getElementById("progBosses").innerHTML = bossesDone+" of "+bossesMax
    document.getElementById("barbarBosses").style.width = bossesProcent*3+"px"
    document.getElementById("progItems").innerHTML = itemsDone+" of "+itemsMax
    document.getElementById("barbarItems").style.width = itemsProcent*3+"px"
    document.getElementById("barbarStory").style.width = gameplay*3+"px"
    document.getElementById("barbarOverworld").style.width = overworldDone*3+"px"
    document.getElementById("barbarDarkworld").style.width = darkworldDone*3+"px"
    document.getElementById("barbarDungeons").style.width = dungeonsDone*3+"px"
    document.getElementById("barbarBonus").style.width = bonusDone*3+"px"
    document.getElementById("barbarTotal").style.width = totalDone*3+"px"

    let date_1 = new Date('01/01/2022');
    let date_2 = new Date();
    let TotalDays = Math.ceil(Math.abs(date_1 - date_2) / (1000 * 3600 * 24));
    let TotalYears = Math.floor(TotalDays/365)
    let TotalDaysSpent = TotalDays
    TotalDays -= TotalYears*365
    document.getElementById("projectAge").innerHTML = "Project age: "+TotalYears+" year, "+TotalDays+" days"
    document.getElementById("lastUpdate").innerHTML = "Last updated: "+data.date
    let EstimateDays = Math.round(TotalDaysSpent * (100 / totalDone))
    let date_estimate = addDays(date_1, EstimateDays)

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const yy = date_estimate.getFullYear()
    const mm = date_estimate.getMonth() + 1
    const dd = date_estimate.getDate()
    document.getElementById("projectEstimate").innerHTML = "Estimated completion date: "+months[mm-1] + ' ' + dd + ', ' + yy;
})
.catch(error => console.error(error));
}
updateProgress()