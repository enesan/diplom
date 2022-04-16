const gr = makeGraph(20, 4)
output(gr);
export const text = 'dadada'
//функция вывода массива
export function output(graph) {

    // здесь поправить счетчик количества вершин
    console.log(`Its from makeGraph. ${Object.values(gr).length} vertices, ${Object.keys(gr).length} edges`)
    for (const key in gr) {
        console.log(`${key} - ${gr[key]}`)
    }
}

export function makeGraph(n, m) {
    return buildEdges(m, buildVertices(n));
}

function buildVertices(n) {
    let vertices = []

    for (let i = 1; i < n+1; ++i) {
        vertices.push(i);
    }

    console.log(vertices)
    return vertices;
}

function buildEdges(m, vertexArray = []) {
    if (m > vertexArray.length) {
        console.log("Amount of edges more than amount of vertices")
        return;
    }

    let graph = {}

    for (let i = 0; i < m; i++) {
        let firstVertex = vertexArray[makeIntRandom(vertexArray.length)]
        let secondVertex = vertexArray[makeIntRandom(vertexArray.length)]
        if (!graph.hasOwnProperty(firstVertex)) {
            graph[firstVertex] = [secondVertex];
        } else {
            for (let j = 0; j < graph[firstVertex].length; j++) {
                if (firstVertex === secondVertex || firstVertex === graph[firstVertex][j]) {
                    buildEdges(m, vertexArray)
                } else {
                    graph[firstVertex].push(secondVertex);
                    break;
                }
            }
        }
    }
    return graph;
}

function makeIntRandom(max, min = 1) {
    // floor даёт наиболее равномерное распределение
    return Math.floor(Math.random() * (max - min) + min);
}

// блок для теста функции рандома
let testFunc = function (){
    let stat = {}
    let a = []
    for (let i = 0; i < 100; i++) {
        a.push(makeIntRandom())
    }

    function calcStat(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (stat[a[i]]) stat[a[i]]++;
            else stat[a[i]] = 1;
        }
        console.log(stat)
    }

    calcStat(a)
}