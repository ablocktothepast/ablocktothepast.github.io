function updateProgress() {
    //FIND WAY TO PARSE PROGRESS VALUES AND ADD IT HERE
    fetch('progress.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.enemiesMax)
        let enemiesMax = data.enemiesMax
        let enemiesDone = data.enemiesDone
        let bossesMax = data.bossesMax
        let bossesDone = data.bossesDone
        let itemsMax = data.itemsMax
        let itemsDone = data.itemsDone
        let storyDone = data.story
        let overworldDone = data.overworld
        let darkworldDone = data.darkworld
        let dungeonsDone = data.dungeons
        let bonusDone = data.bonus
        let totalDone = data.total

    let enemiesProcent = Math.round((enemiesDone/enemiesMax)*100)
    let bossesProcent = Math.round((bossesDone/bossesMax)*100)
    let itemsProcent = Math.round((itemsDone/itemsMax)*100)

    document.getElementById("progEnemies").innerHTML = enemiesDone+" of "+enemiesMax
    document.getElementById("barbarEnemies").style.width = enemiesProcent*3+"px"
    document.getElementById("progBosses").innerHTML = bossesDone+" of "+bossesMax
    document.getElementById("barbarBosses").style.width = bossesProcent*3+"px"
    document.getElementById("progItems").innerHTML = itemsDone+" of "+itemsMax
    document.getElementById("barbarItems").style.width = itemsProcent*3+"px"
    document.getElementById("barbarStory").style.width = storyDone*3+"px"
    document.getElementById("barbarOverworld").style.width = overworldDone*3+"px"
    document.getElementById("barbarDarkworld").style.width = darkworldDone*3+"px"
    document.getElementById("barbarDungeons").style.width = dungeonsDone*3+"px"
    document.getElementById("barbarBonus").style.width = bonusDone*3+"px"
    document.getElementById("barbarTotal").style.width = totalDone*3+"px"

    let date_1 = new Date('01/01/2022');
    let date_2 = new Date();
    let TotalDays = Math.ceil(Math.abs(date_1 - date_2) / (1000 * 3600 * 24));
    document.getElementById("projectAge").innerHTML = "Project age: "+TotalDays+" days"
    document.getElementById("lastUpdate").innerHTML = "Last updated: "+data.date
})
.catch(error => console.error(error));
}
updateProgress()