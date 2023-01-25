function SolvePyramid(pyramid, target){
    //Create a path variable to store the correct path own the pyramid
    let path = [];

    //Once the path is found, this will turn it into the desired syntax containing Rs and Ls
    function convertPath(path){
        let pathString = "";
        for (let i = 0; i < path.length - 1; i++) {
            if (path[i][1] < path[i + 1][1]) {
               pathString += "R";
            } else {
                pathString += "L";
            }
        }
        return pathString;
    }

    //Alters the background color of the inputs that are part of the correct path
    function highLightBackGround(path){

        //If previous path was found, remove it
        let prevPath = document.querySelectorAll('.path');
        if(prevPath !== null){
            prevPath.forEach(element => {
                element.classList.remove('path');
            })
        }
        //Mark the new path
        let rows = document.querySelectorAll('.row');
        for(let i = 0; i < path.length; i++){
            let children = rows[i].childNodes;
            children[path[i][1]].classList.add('path');
        }
    }

    function dfs(row, col, product){
        //Take a recursive approach using DFS to find a path that results in the correct product
        if(row === pyramid.length - 1){
            if(product * pyramid[row][col] === parseInt(target)){
                path.push([row,col]);
                return true;
            }
            return false;
        }
        path.push([row,col]);
        if (dfs(row + 1, col, product * pyramid[row][col])) return true;
        if (dfs(row + 1, col + 1, product * pyramid[row][col])) return true;
        path.pop();
        return false;
    }

    if(dfs(0,0,1)){
        if(document.querySelector('.hidden') !== null) document.querySelector('.hidden').classList.remove('hidden');
        highLightBackGround(path);
        return convertPath(path);
    }
    if(document.querySelector('.hidden') !== null) document.querySelector('.hidden').classList.remove('hidden');
    return "No path was found";
}

export default SolvePyramid;