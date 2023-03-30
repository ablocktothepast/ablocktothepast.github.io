function updateProgress() {
    //FIND WAY TO PARSE PROGRESS VALUES AND ADD IT HERE

    //REPLACE VALUES
    let enemiesMax = 131
    let enemiesDone = 122
    let bossesMax = 18
    let bossesDone = 3
    let itemsMax = 53
    let itemsDone = 51
    let storyDone = 1
    let overworldDone = 2
    let darkworldDone = 0
    let dungeonsDone = 0
    let bonusDone = 4
    let totalDone = 5

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
}

updateProgress()