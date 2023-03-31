function output() {
    var input = document.getElementById("input").value
    const [date, ...contents] = input.split('\n');
    const formattedDate = date.replace(/\//g, '-');
    const result = { date: formattedDate, contents: contents.map(item => item.replace('- ', '')) };
    document.getElementById("output").value = document.getElementById("output").value+",\n"+JSON.stringify(result)
    console.log(result)
}